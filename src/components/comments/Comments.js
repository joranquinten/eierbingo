import React from 'react';
import Comment from './Comment.js';

import './comments.css';

// Comments component, renders the individual comments from props
class Comments extends React.Component {

    
  // Render the vDOM
  render() {
    
    // Get the collection of comments from the props
    const allComments = this.props.allComments;

    // Define an array to place the repeating group in
    let comments = [];

    // Add the comments to the array with Comment component
    for (let key in allComments) {
        comments.push(<Comment key={key} id={ allComments[key].id } comment={allComments[key] } />)
    }

    return (
        <div className="comments">
            { comments }
        </div>
    )
  }

}

export default Comments;