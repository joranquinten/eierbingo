import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/nl';

import './Bingo.css';

// Weather component, fetches the codes and matches from input
class Bingo extends React.Component {
    
    constructor(props) {
        super(props);
        // Register the state
        this.state = {
            eggCode: this.props.eggCode
        };
    }

  // Render the vDOM
  render() {


    const url = `./server/egg-codes.json`;

    // Request the codes
    fetch(url)
        .then((response) => {
            // Convert to JSON and pass it on
            return (response.json())
        })
        .then((codes) => {
            // Some variables to generate a readable string
            const timestamp = moment.unix(codes.dt).fromNow();

            const codeToMatch = this.props.eggCode;
            const lists = codes.lists.filter(list => {
                
                list.codes = list.codes.filter(item => {
                
                    const regex = new RegExp(item.replace(/X/g, '[0-9]'));
                    return (regex.test(codeToMatch));
                    
                });
                    
                return (list.codes.length > 0);
                
                });
                
                const winnerTitle = (lists.length > 0) ? `B-I-N-G-O!` : `Helaas!`;
                const winnerMessage = (lists.length > 0) ? `Je prijs is gevallen op ${codeToMatch}! Maar let op: ${lists[0].decription}.` : `Code ${codeToMatch} valt niet in de prijzen. Het is een kleine troost, maar: eet smakelijk!`;

            // Add to the state
            this.setState({ winnerTitle: winnerTitle, winnerMessage: winnerMessage, codeTimestamp: `De lijst met codes is ${timestamp} voor het laatst bijgewerkt.` });
        });

    return (
        <section className="widget bingo">
            <header>{ this.state.winnerTitle }</header>
            <p className="result">{ this.state.winnerMessage }</p>
            <p>Heb je meer codes? Vul ze in!</p>
            <footer>{ this.state.codeTimestamp }</footer>
        </section>        
    )
  }

}

// Define required type/fields
Bingo.propTypes = {
    eggCode: PropTypes.string.isRequired
};

export default Bingo;