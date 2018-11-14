const WeatherDay =(props)=>  {

  console.log('In Weatherday')
  console.log(props)
  let weatherDays = props.data.map((data, index) => (
    <WeatherDayDetails body={data} key = {index} weatherClick={props.weatherClick} />
  ))



    return (
      <div className="weather-display">
        <h1>5 Day Forecast</h1>
        {weatherDays}
      </div>
    )
  }
