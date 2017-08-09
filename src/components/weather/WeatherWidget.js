import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import './weather.css';

// Comment component, renders the individual comments from props
class WeatherWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city
        };
    }


    componentDidMount() {

        const API_KEY = '54710bf28b9d7c50bc1726ffcdca3c62';
        const url = `//api.openweathermap.org/data/2.5/weather?q=${this.props.city},nl&lang=nl&units=metric&appid=${API_KEY}`;

        fetch(url)
            .then((response) => {
                return (response.json())
            })
            .then((weather) => {

                const weatherCity = weather.name;
                const description = weather.weather[0].description;
                const tmpMin = weather.main.temp_min;
                const tmpMax = weather.main.temp_max;
                const timestamp = moment.unix(weather.dt).fromNow();

                const weatherString = `Het is ${description} met temperaturen tussen ${tmpMin}\u00b0 en ${tmpMax}\u00b0 Celsius.`;

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

WeatherWidget.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherWidget;