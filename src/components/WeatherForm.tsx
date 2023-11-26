import { CircularProgress, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/weather';
import { FunctionComponent, useState } from 'react';
import WeatherCard from './WeatherCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const WeatherForm: FunctionComponent = () => {
  const [search, setSearch] = useState('');

  const {
    data: weather,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['weather', { search }],
    queryFn: () => getWeather(search),
    enabled: false,
    staleTime: Infinity,
    retryOnMount: false,
  });

  return (
    <div className='WeatherWrapper'>
      <div className='WeatherForm'>
        <FontAwesomeIcon
          icon={faLocationDot}
          className='input-icons location-icon'
          onClick={async () => refetch()}
        />
        <TextField
          variant='standard'
          sx={{
            fontSize: '2rem',
          }}
          value={weather?.name || search}
          onChange={(event) => setSearch(event.target.value)}
          className='search-input'
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='input-icons search-icon'
          onClick={async () => refetch()}
        />
      </div>
      {isLoading && <CircularProgress />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default WeatherForm;
