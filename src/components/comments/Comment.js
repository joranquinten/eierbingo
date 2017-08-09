import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/nl';
// moment.locale('nl');

// Comment component, renders the individual comments from props
class Comment extends React.Component {

  // Render the vDOM
  render() {

    const comment = this.props.comment;

    const commentId = comment.id;
    const commentName = comment.name;
    const commentMsg = comment.comment;
    const commentTimestamp = moment.unix(comment.timestamp).fromNow();

    return (
        <section className="panel panel-default">
            <header>Comment ({commentId}) from { commentName }</header>
            <div>
                { commentMsg }
            </div>
            <footer>{ commentTimestamp }</footer>
        </section>
        
    )
  }

}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};

export default Comment;