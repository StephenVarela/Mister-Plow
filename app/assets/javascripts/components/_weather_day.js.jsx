const WeatherDay =(props)=>  {
  let weatherDays = props.data.map((data, index) => {
    return <WeatherDayDetails body={data} key={index} />
  });

  return (
    <div className="weather-display">
      <h1>{weatherDays.length} Day Forecast</h1>
      {weatherDays}
    </div>
  )
}
