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

    componentDidMount() {

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

                // Add to the state
                this.setState({ codeTimestamp: `Laatst bijgewerkt ${timestamp}` });
            });
    }
  // Render the vDOM
  render() {

    return (
        <section className="widget bingo">
            <footer>Bijgewerkt: { this.state.codeTimestamp }</footer>
        </section>        
    )
  }

}

// Define required type/fields
Bingo.propTypes = {
    eggCode: PropTypes.string.isRequired
};

export default Bingo;