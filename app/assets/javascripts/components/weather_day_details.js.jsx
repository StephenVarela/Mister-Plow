const WeatherDayDetails = (props) =>  {

  let weatherDaysInfo = props.body.map((bits, i) => <WeatherHourly subBody = {bits} key = {i}/>)


    return (
      <div className="weather-box">
        <div id = 'icon'>
          <img id="wicon" src={"http://openweathermap.org/img/w/" + props.body[4].weather.icon +".png"} alt="Weather icon" onClick={(e) => {this.logoClick(e)}}/>
        </div>
        <h2>{props.body[4].weather.description}</h2>
        <h3>{props.body[4].datetime}</h3>
        <h4>{props.body[4].weather.main}</h4>
      </div>
    )
  }
