import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState(
        {
        city: "Bengaluru",
        feelsLike:  37.54,
        humidity: 39,
        max_temp: 35.34,
        min_temp: 35.34,
        temp: 35.34,
        weather: "broken clouds"
    }
    );
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign:"center"}}>
            <h2> Wether App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}