import React, { Component } from 'react';
import Comments from './components/comments/Comments';
import CommentAdd from './components/comments/CommentAdd';
import CommentsClear from './components/comments/CommentsClear';

import WeatherWidget from './components/weather/WeatherWidget';

import moment from 'moment';

import sun from './sun.svg';
import './App.css';

// Fake a JSON endpoint
const fakeComments = [{
    id: 1,
    name: 'John Doe',
    email: 'john@johndoe.com',
    gender: 'Man',
    comment: 'Wat een ontzettend lekker weer vandaag!',
    timestamp: 1502230980
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@johndoe.com',
    gender: 'Vrouw',
    comment: 'Het is wel erg benauwd. Dat heb je in Nederland, is het warm, dan is het meteen zo benauwd. Bah!',
    timestamp: 1502276225
  }
];

// If comments exist in localStorage, display from localStorage (mimics saving of comments in a backend service)
const fromLocalStorage = JSON.parse(window.localStorage.getItem('allComments'));
let allComments = fromLocalStorage ? fromLocalStorage : fakeComments;

// App component, combines the components to an app
class App extends Component {

  constructor(props) {
    super(props);
    
    // Provide the collection to the state (to pass down)
    this.state = { allComments };

    // Manual bind (autobinding is provided via React.createClass())
    this._addComment = this._addComment.bind(this); 
    this._clearComments = this._clearComments.bind(this);

  }

  render() {

    const clearCommentsButton = (allComments.length > 2) ? <CommentsClear clearComments={ this._clearComments } /> : null;

    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="This is the sun!" />
          <h2>Dutch Weather Complain Service</h2>
          <div className="App-logo"></div>
        </div>
          <WeatherWidget city="eindhoven" />
        
        <div className="widget">
          <Comments allComments={ allComments } />
          <CommentAdd addComment={ this._addComment } />
          { clearCommentsButton }
        </div>
      </div>
    );
  }

  /*
    Expects a comment object with a name and comment
  */
  _addComment(comment) {

    /*
    Simulate a call to a backend and mimic the expected response:
    */

    // Get a new ID:
    const newId = (this.state.allComments.sort((a,b) => {return (a.id<b.id)}))[0].id + 1;
    comment.newComment.id = newId;

    // Mimic some sort of unix timestamp to the comment
    comment.newComment.timestamp = moment().unix();

    // Add the new comment to the collection
    allComments.push(comment.newComment);

    // Order by timestamp
    allComments.sort((a,b) => {
      return (a.timestamp > b.timestamp);
    });

    // Save to localStorage for retrieval upon revisit
    window.localStorage.setItem('allComments', JSON.stringify(allComments));

    // Update the state
    this.setState({ allComments });
  }

  /*
    Removes the values from localStorage, defaults to fakeComments
  */
  _clearComments() {

    // Remove from localStorage
    window.localStorage.removeItem('allComments');

    // Reset to display the fakeComments again
    allComments = fakeComments;
    this.setState({ allComments });
  }

}

export default App;
