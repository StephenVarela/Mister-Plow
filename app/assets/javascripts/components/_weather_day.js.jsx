const WeatherDay =(props)=>  {


  let weatherDays = props.data.map((data, index) => (
    <WeatherDayDetails body={data} key = {index} weatherClick={props.weatherClick} />
  ))
  
    return (
      <div className="weather-display">
        {weatherDays}
      </div>
    )
  }
