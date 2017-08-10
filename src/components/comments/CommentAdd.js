import React from 'react';
import ReactDOM from 'react-dom';

// CommentAdd component, renders the form and passes the input up the scope
class CommentAdd extends React.Component {

    constructor(props) {
        super(props);
        // Register the methods

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
                        <label htmlFor="commentComment">Je klacht over het weer</label>
                        <textarea ref="commentComment" required id="commentComment"></textarea>
                    </fieldset>

                    <button type="submit" onClick={ this._onSubmit }>Toevoegen</button>
                </form>
            </div>
    
        )
    }

    _onSubmit(event) {

        event.preventDefault();

        // Reference the inputs
        const inputName = ReactDOM.findDOMNode(this.refs.commentName);
        const inputComment = ReactDOM.findDOMNode(this.refs.commentComment);

        // Basic validation
        if (inputName.value !== '' && inputComment.value !== '') {

            // Define the commentObject to be added
            const newComment = {
                name: inputName.value,
                comment: inputComment.value
            };

            // Send it up to the parent for handling
            this.props.addComment({
                newComment
            });

            // Reset the input values
            inputName.value = '';
            inputComment.value = '';
        }
    }

}

export default CommentAdd;