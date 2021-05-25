import './App.css';
import React from 'react';
import FormInfo from './Form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './Card';
import WeatherCard from './Weather';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: '',
      show: false,
      display: false,
      weatherArr: [],
    }
  }

  setData = (data, showing) => {
    this.setState({
      dataInfo: data,
      show: true,
      display: showing,
    })
  }
  setWeatherArr = (weatherData, showing) => {
    this.setState({
      weatherArr: weatherData,
      display: showing
    })
    // console.log(this.state.weatherArr);
  }

  render() {
    return (
      <>
        <FormInfo setData={this.setData} setWeather={this.setWeatherArr} />
        {this.state.show &&
          <InfoCard data={this.state.dataInfo} display={this.state.display} />
        }

        {this.state.weatherArr.length!==0 && <WeatherCard display={this.state.display} weatherData={this.state.weatherArr} />}
      </>
    )
  }
}

export default App;
