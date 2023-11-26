import { FunctionComponent } from 'react';
import { CardMedia } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import clearImage from '../assets/clear.png';
import rainImage from '../assets/rain.png';
import snowImage from '../assets/snow.png';
import cloudImage from '../assets/cloud.png';
import mistImage from '../assets/mist.png';

interface Props {
  weather: Forecast;
}

const WeatherCard: FunctionComponent<Props> = (props) => {
  const { weather } = props;
  const weatherImageLookup = {
    Clear: clearImage,
    Rain: rainImage,
    Snow: snowImage,
    Clouds: cloudImage,
    Haze: mistImage,
  } as { [K in WeatherImageName]: string };
  return (
    <div className='WeatherCard'>
      <CardMedia
        component='img'
        height='300'
        image={weatherImageLookup[weather.weather[0].main]}
        alt='green iguana'
      />
      <div className='temperature-div'>
        <span className='temperature'>{Math.round(weather.main.temp)}°F</span>
        <span className='temperature'>{weather.weather[0].description}</span>
      </div>
      <div className='weather-details'>
        <div className='weather-wind'>
          <FontAwesomeIcon icon={faWater} className='wind-icon' />
          <div>
            <span> {weather.wind.speed}%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className='weather-water'>
          <FontAwesomeIcon icon={faWind} className='water-icon' />
          <div>
            <span> {weather.wind.speed} MPH</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
