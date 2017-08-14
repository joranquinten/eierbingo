import React from 'react';
import ReactDOM from 'react-dom';

// CommentAdd component, renders the form and passes the input up the scope
class CheckCode extends React.Component {

    constructor(props) {
        super(props);
        // Register the methods

        // Manual bind (autobinding is provided via React.createClass())
        this._onSubmit = this._onSubmit.bind(this);
    }

    componentDidMount() {
        // Automagically focus in the name field
        ReactDOM.findDOMNode(this.refs.userCode).focus();
    }

    // Render the vDOM
    render() {

        return (
            <div className="widget UserCode">
                <p className="Form-intro">Heb je bingo?</p>
                <form>
                    <fieldset>
                        <label htmlFor="userCode">Vul je eiercode in:</label>
                        <input ref="userCode" required id="userCode" type="text" placeholder="X-NL-XXXXX-XX" />
                    </fieldset>
                    <button type="submit" onClick={ this._onSubmit }>Bingo?</button>
                </form>
            </div>
    
        )
    }
    
    _onSubmit(event) {

        event.preventDefault();

        // Reference the inputs
        let userCode = ReactDOM.findDOMNode(this.refs.userCode);

        // Basic validation
        if (userCode.value) {

            // Send it up to the parent for handling
            this.props.checkCode(userCode.value);

            // Reset the input values
            //userCode.value = '';
            ReactDOM.findDOMNode(this.refs.userCode).focus();
        }
    }

}

export default CheckCode;