import React, { Component } from 'react';
import Comments from './components/comments/Comments.js';
import CommentAdd from './components/comments/CommentAdd.js';

import WeatherWidget from './components/weather/WeatherWidget';

import moment from 'moment';

import sun from './sun.svg';
import './App.css';

// Fake a JSON endpoint
const allComments = [
        { id: 1, name:'John Doe', comment:'Wat een ontzettend lekker weer vandaag!', timestamp: 1502230980 },
        { id: 2, name:'Jane Doe', comment:'Het is wel erg benauwd. Dat heb je in Nederland, is het warm, dan is het meteen zo benauwd. Bah!', timestamp: 1502276225 }
      ];

class App extends Component {
  constructor(props) {
    super(props);
    
    // Provide the collection to the state (to pass down)
    this.state = { allComments };

    // Manual bind (autobinding is provided via React.createClass())
    this.addComment = this.addComment.bind(this); 
  }

  render() {
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
          <CommentAdd addComment={ this.addComment } />
        </div>
      </div>
    );
  }

  /*
    Expects a comment object with a name and comment
  */
  addComment(comment) {

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

    // Update the state
    this.setState({ allComments });
  }


}

export default App;
