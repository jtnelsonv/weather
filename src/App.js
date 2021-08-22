import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      weatherIcon: '',
      weatherTemp: '',
      weatherCond: '',
      weatherLoc: ''
    }
  }

  // Invoked immediately after a component is mounted
  // Initializes getWeatherData function to make the API call
  componentDidMount = () => {
    this.getWeatherData();
  }

  // Get weather for city, country from OpenWeather
  // Set state of current temp, condition, location, and weather icon
  getWeatherData = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=kyoto,jp&appid=' + process.env.REACT_APP_API_KEY +'&units=imperial').then(res => this.setState({
      weatherData: res.data,
      weatherIcon: 'http://openweathermap.org/img/wn/' + res.data.weather[0].icon + '@4x.png',
      weatherTemp: res.data.main.temp,
      weatherCond: res.data.weather[0].description,
      weatherLoc: res.data.name + ', ' + res.data.sys.country
    })).catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card text-white bg-danger mb-3" style={{maxWidth: '18rem', boxShadow: '1px 1px 20px 3px #999'}}>
            <div className="card-body">
              <h5 className="text-center display-3">{this.state.weatherLoc}</h5>
              <img src="sakura.svg" className="position-absolute top-0 end-0" alt="sakura" style={{maxWidth: '48px', margin: '-20px -20px', zIndex: '1'}} />
              <img src="sakura2.svg" className="position-absolute top-0 end-0" alt="sakura" style={{maxWidth: '48px', margin: '28px -30px', zIndex: '2'}} />
              <div className="row row-cols-1">
                <div className="col text-center mt-5"><p className="display-4">{Math.ceil(this.state.weatherTemp)}&deg;F</p></div>
                <div className="col text-center m-0"><img src={this.state.weatherIcon} alt="icon" /></div>
                <div className="col text-center m-0"><p className="h4" style={{textTransform: 'capitalize'}}>{this.state.weatherCond}</p></div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{fontSize: '0.6em'}}>Sakura icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticon.com</a></div>
          <div className="text-center" style={{fontSize: '0.6em'}}>Weather provided by <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather</a></div>
        </div>
      </div>
    );
  }
}

export default App;