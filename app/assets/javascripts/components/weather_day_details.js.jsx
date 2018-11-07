const WeatherDayDetails = (props)=>  {

    return (
      <div>
        <div id = 'icon'>
          <img id="wicon" src={`http://openweathermap.org/img/w/03d.png`} alt="Weather icon" onClick={() => {props.weatherClick()}}/>
        </div>
        <h1>{props.body[0].date}</h1>
      </div>
    )
  }
