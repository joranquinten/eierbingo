import React from 'react';
import ReactDOM from 'react-dom';

// Comment component, renders the individual comments from props
class CommentAdd extends React.Component {

constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

componentDidMount(){
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

                <button type="submit" onClick={ this.onSubmit }>Toevoegen</button>
            </form>
        </div>
        
    )
  }

onSubmit(event){
    event.preventDefault();
    
    const inputName = ReactDOM.findDOMNode(this.refs.commentName);
    const inputComment = ReactDOM.findDOMNode(this.refs.commentComment);

    if (inputName.value !== '' && inputComment.value !== '') {
        const newComment = {
            name: inputName.value,
            comment: inputComment.value
        };
        this.props.addComment({ newComment });
        inputName.value = '';
        inputComment.value ='';
    }
  }

}

export default CommentAdd;