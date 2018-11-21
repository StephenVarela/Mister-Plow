const WeatherDay =(props)=>  {
  let weatherDays = props.data.map((data, index) => {
    const boxClass = index === 0? 'weather-box weather-first' : index === 4? 'weather-box weather-fourth' : 'weather-box'
    return <WeatherDayDetails weatherBox={boxClass} weekdayString={props.weekdayString} dateString={props.dateString} body={data} key={index} />
  });

  return (
    <div className="weather-display">
      <h1>{weatherDays.length} Day Forecast</h1>
      <div className="weather-weekday-display">
        {weatherDays}
      </div>
    </div>
  )
}
