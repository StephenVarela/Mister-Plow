const Weather24 =(props)=>  {

  
  if (props.data[0]){
    let upcoming = props.data[0].concat(props.data[1]);
    let next_8 = upcoming.slice(0, 8);
    var weatherHour = next_8.map((data, index) => {
      const dateTime = new Date(data.datetime);

      return ( 
        <div className="weather-hourly-box" key={index}>
          <div>{props.timeString(dateTime)}</div>
          <div>{props.dateString(dateTime)}</div>
          <div>{data.weather.main}</div>
          <div id = 'icon'>
            <img id="wicon" src={"http://openweathermap.org/img/w/" + data.weather.icon +".png"} alt="Weather icon"/>
          </div>
          <div>{Math.round(data.temp-273.15)}&deg;</div>
        </div>
      )
    })
  }
    return (
      <div className="weather-hourly-display">
        {weatherHour}
      </div>
    )
  }
