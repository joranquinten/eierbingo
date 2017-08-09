import React, { Component } from 'react';
import Comments from './components/comments/Comments.js';
import CommentAdd from './components/comments/CommentAdd.js';

import WeatherWidget from './components/weather/WeatherWidget';

import moment from 'moment';

import './App.css';

const allComments = [
        { id: 1, name:'John Doe', comment:'This is a comment.', timestamp: 1502230980 },
        { id: 2, name:'Jane Doe', comment:'This is another comment, this time from Jane.', timestamp: 1502276225 }
      ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allComments };
    this.addComment = this.addComment.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dutch Weather Complain Service</h2>
        </div>
        <WeatherWidget city="eindhoven" />
        <Comments allComments={ allComments } />
        <CommentAdd addComment={ this.addComment } />
      </div>
    );
  }

  addComment(comment) {

    // Get a new ID:
    const newId = (this.state.allComments.sort((a,b) => {return (a.id<b.id)}))[0].id + 1;

    comment.newComment.id = newId;
    comment.newComment.timestamp = moment().unix();

    allComments.push(comment.newComment);

    // Sort by timestamp
    allComments.sort((a,b) => {
      return (a.timestamp > b.timestamp);
    });

    this.setState({ allComments });
  }


}

export default App;
