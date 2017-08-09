import React from 'react';
import PropTypes from 'prop-types';

import './weather.css';

// Comment component, renders the individual comments from props
class WeatherWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            weather: {}
        };
    }


    componentDidMount() {

        const API_KEY = '54710bf28b9d7c50bc1726ffcdca3c62';
        const url = `//api.openweathermap.org/data/2.5/weather?q=${this.props.city},nl&lang=nl&appid=${API_KEY}`;


        fetch(url)
            .then((response) => {
this.setState({ weather: response });
            });
    }
  // Render the vDOM
  render() {

    return (
        <section className="widget weather">
            Het weer in { this.state.city }<br/>
            {this.state.weather}
        </section>        
    )
  }

}

WeatherWidget.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherWidget;