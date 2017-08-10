import React from 'react';

// CommentAdd component, renders the form and passes the input up the scope
class CommentsClear extends React.Component {

    constructor(props) {
        super(props);
        // Register the methods

        // Manual bind (autobinding is provided via React.createClass())
        this._clearComments = this._clearComments.bind(this);
    }

    // Render the vDOM
    render() {

        return (
            <button type="submit" className="clear" onClick={ this._clearComments }>Opschonen</button>   
        )
    }

    _clearComments(event) {

        event.preventDefault();
        // Send it up to the parent for handling
        this.props.clearComments();

    }

}

export default CommentsClear;