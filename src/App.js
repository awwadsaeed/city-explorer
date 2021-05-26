import './App.css';
import React from 'react';
import FormInfo from './Form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './Card';
import WeatherCard from './Weather';
import MovieCard from './movies';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo:[],
      show: false,
      display: false,
      weatherArr: [],
      rend: false,
      movieArr:'',
      disp:false,
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
      rend: showing
    })
    // console.log(this.state.weatherArr);
  }
  setMovies = (mov,dis) => {
    this.setState({
      movieArr: mov,
      disp:dis,
    })
    console.log(this.state.movieArr);
  }

  render() {
    return (
      <>
        <FormInfo setData={this.setData} setWeather={this.setWeatherArr} setMovie={this.setMovies} />
        {this.state.show &&
          <InfoCard data={this.state.dataInfo} display={this.state.display} />
        }

        {this.state.show && <WeatherCard display={this.state.rend} weatherData={this.state.weatherArr} />}
        {this.state.show && <MovieCard display={this.state.disp} movieData={this.state.movieArr} />}
      </>
    )
  }
}

export default App;