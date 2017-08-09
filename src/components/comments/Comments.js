import React from 'react';
import Comment from './Comment.js';

// comment component, renders the individual comments from props
class Comments extends React.Component {

    
  // Render the vDOM
  render() {
    const allComments = this.props.allComments;

    let comments = [];

    for (let key in allComments) {
        comments.push(<Comment key={key} id={ allComments[key].id } comment={allComments[key] } />)
    }

    return (
        <div>
            { comments }
        </div>
    )
  }

}

export default Comments;