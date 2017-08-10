import React from 'react';
import ReactDOM from 'react-dom';

// CommentAdd component, renders the form and passes the input up the scope
class CommentAdd extends React.Component {

    constructor(props) {
        super(props);
        // Register the methods

        // Manual bind (autobinding is provided via React.createClass())
        this._handleChange = this._handleChange.bind(this);

        // Manual bind (autobinding is provided via React.createClass())
        this._onSubmit = this._onSubmit.bind(this);
    }

    componentDidMount() {
        // Automagically focus in the name field
        ReactDOM.findDOMNode(this.refs.commentName).focus();
    }

    // Render the vDOM
    render() {

        return (
            <div className="commentAdd">
                <p>Neem deel aan de discussie:</p>
                <form>
                    <fieldset>
                        <label htmlFor="commentName">Je naam</label>
                        <input ref="commentName" required id="commentName" type="text" placeholder="Je naam" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="commentEmail">Je emailadres</label>
                        <input ref="commentEmail" required id="commentEmail" type="email" placeholder="Je emailadres" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="commentGender_Neutral">Je geslacht</label><br/>
                        <div className="radio"><input ref="commentGender" name="commentGender" value="man" id="commentGender_Male" type="radio" onChange={ this._handleChange } /><label htmlFor="commentGender_Male">Man</label></div>
                        <div className="radio"><input ref="commentGender" name="commentGender" value="neutraal" id="commentGender_Neutral" type="radio" onChange={ this._handleChange } /><label htmlFor="commentGender_Neutral">Neutraal</label></div>
                        <div className="radio"><input ref="commentGender" name="commentGender" value="vrouw" id="commentGender_Female" type="radio" onChange={ this._handleChange } /><label htmlFor="commentGender_Female">Vrouw</label></div>
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor="commentComment">Je klacht over het weer</label>
                        <textarea ref="commentComment" required id="commentComment"></textarea>
                    </fieldset>

                    <button type="submit" onClick={ this._onSubmit }>Toevoegen</button>
                </form>
            </div>
    
        )
    }

    // Capture the change on radio
    _handleChange(event) {
        let currentGender = event.target.value.trim();
        this.setState({
            gender: currentGender   
        });
    }

    _onSubmit(event) {

        event.preventDefault();

        // Reference the inputs
        const inputName = ReactDOM.findDOMNode(this.refs.commentName);
        const inputEmail = ReactDOM.findDOMNode(this.refs.commentEmail);
        const inputComment = ReactDOM.findDOMNode(this.refs.commentComment);

        // Basic validation
        if (inputName.value !== '' && inputEmail.value !== '' && this.state.gender !== '' && inputComment.value !== '') {

            // Define the commentObject to be added
            const newComment = {
                name: inputName.value,
                email: inputEmail.value,
                gender: this.state.gender,
                comment: inputComment.value
            };

            // Send it up to the parent for handling
            this.props.addComment({
                newComment
            });

            // Reset the input values
            inputName.value = '';
            inputEmail.value = '';
            inputComment.value = '';
        }
    }

}

export default CommentAdd;