const WeatherDayDetails = (props)=>  {

  let weatherDaysInfo = props.body.map(bits => <WeatherHourly subBody = {bits} />)
    return (
      <div>
        <div id = 'icon'>
          <img id="wicon" src={`http://openweathermap.org/img/w/03d.png`} alt="Weather icon" onClick={() => {props.weatherClick()}}/>
        </div>
        <h1>{props.body[0].date}</h1>
        <h4>{weatherDaysInfo}</h4>
      </div>
    )
  }
