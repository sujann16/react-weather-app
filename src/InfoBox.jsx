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
let COLD_URL="https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
let RAIN_URL="https://images.unsplash.com/photo-1646277586472-6d5600854899?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="infoBox">
            <div className="card-component">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp > 15 ? info.humidity > 80 ? RAIN_URL :   HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          &nbsp;
          {info.temp > 15 ? info.temp > 15 ? <ThunderstormIcon/> : <SunnyIcon/> : <AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>
            <p>Temperature = {info.temp}&deg;C</p>
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