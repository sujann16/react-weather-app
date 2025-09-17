import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny'; 

export default function infoBox({info}) {
let HOT_URL= "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fHww";
let COLD_URL="src/assets/cold.avif"
let RAIN_URL="src/assets/rain2.avif";
    return (
        <div className="infoBox">
            <div className="card-component">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp > 15 ? info.humidity > 70 ? RAIN_URL :   HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          &nbsp;
          {info.humidity > 70 ? <ThunderstormIcon/>: info.temp > 15 ? <SunnyIcon/>:<AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>
            <p>Temperatur = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Max temp = {info.max_temp}</p>
            <p>Min temp = {info.min_temp}</p>
            <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>

            </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}