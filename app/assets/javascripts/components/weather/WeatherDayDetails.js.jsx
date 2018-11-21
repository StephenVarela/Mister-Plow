const WeatherDayDetails = (props) =>  {  
  const dateString = props.body[0].datetime.replace(/-/g, '/')
  const dateTime = new Date(dateString)
  return (
    <div className={props.weatherBox}>
      <h3>{props.weekdayString(dateTime)}</h3>
      <h3>{props.dateString(dateTime)}</h3>
      <h4>{props.body[0].weather.main}</h4>
      <div id = 'icon'>
        <img id="wicon" src={"http://openweathermap.org/img/w/" + props.body[0].weather.icon +".png"} alt="Weather icon"/>
      </div>
      <h2>{props.body[0].weather.description}</h2>
    </div>
  )
}
