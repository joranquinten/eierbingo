import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/nl';

// Comment component, renders the individual comments from props
class Comment extends React.Component {

  // Render the vDOM
  render() {

    // Get the comment from the props
    const comment = this.props.comment;
    // Convert the timestamp to readable
    const commentTimestamp = moment.unix(comment.timestamp).fromNow();

    return (
        <section className="comment">
            <header><a name="comment-{ comment.id }">{ comment.name }</a></header>
            <div className="message">
                { comment.comment }
            </div>
            <footer>Toegevoegd: { commentTimestamp }</footer>
        </section>
        
    )
  }

}

// Define required type/fields
Comment.propTypes = {
    comment: PropTypes.object.isRequired
};

export default Comment;