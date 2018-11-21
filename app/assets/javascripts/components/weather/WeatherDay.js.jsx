const WeatherDay =(props)=>  {
  let weatherDays = props.data.map((data, index) => {
    const boxClass = 'weather-box' + (index === 0? ' weather-first' : '')
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
