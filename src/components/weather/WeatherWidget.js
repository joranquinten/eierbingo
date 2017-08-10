import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/nl';

import './weather.css';

// Weather component, fetches the weather for designated city
class WeatherWidget extends React.Component {

    constructor(props) {
        super(props);
        // Register the state
        this.state = {
            city: this.props.city
        };
    }

    componentDidMount() {

        // Config the weather API
        const API_KEY = '54710bf28b9d7c50bc1726ffcdca3c62';
        const url = `//api.openweathermap.org/data/2.5/weather?q=${this.props.city},nl&appid=${API_KEY}&lang=nl&units=metric`;

        // Request the weather
        fetch(url)
            .then((response) => {
                // Convert to JSON and pass it on
                return (response.json())
            })
            .then((weather) => {

                // Some variables to generate a readable string
                const weatherCity = weather.name;
                const description = weather.weather[0].description;
                const tmpMin = weather.main.temp_min;
                const tmpMax = weather.main.temp_max;
                const timestamp = moment.unix(weather.dt).fromNow();

                // Weather report as a string
                const weatherString = `Momenteel ${description} met temperaturen tussen ${tmpMin}\u00b0 en ${tmpMax}\u00b0 Celsius.`;

                // Add to the state
                this.setState({ weatherCity: weatherCity, weather: weatherString, weatherTimestamp: timestamp });
            });
    }
  // Render the vDOM
  render() {

    return (
        <section className="widget weather">
            <header>Het weerbericht voor { this.state.weatherCity } luidt:</header>
            <div className="message">
                { this.state.weather }
            </div>
            <footer>Bijgewerkt: { this.state.weatherTimestamp }</footer>
        </section>        
    )
  }

}

// Define required type/fields
WeatherWidget.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherWidget;