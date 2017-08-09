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
        <div className="panel panel-default">
            <form>
                <input ref="commentName" type="text" />
                <input ref="commentComment" type="text" />
                <button type="submit" onClick={this.onSubmit}>Add</button>
            </form>
        </div>
        
    )
  }

onSubmit(event){
    event.preventDefault();
    const inputName = ReactDOM.findDOMNode(this.refs.commentName);
    const inputComment = ReactDOM.findDOMNode(this.refs.commentComment);

    const newComment = {
        name: inputName.value,
        comment: inputComment.value
    };
    this.props.addComment({ newComment });
    inputName.value = '';
    inputComment.value ='';
  }

}

export default CommentAdd;