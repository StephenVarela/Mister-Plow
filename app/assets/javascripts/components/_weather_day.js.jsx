const WeatherDay =(props)=>  {

  let weatherDays = props.fakeData.map((data, index) => (
    <WeatherDayDetails body ={data} key = {index} weatherClick={props.weatherClick}/>
  ))
    return (
      <div>
        {weatherDays}
      </div>
    )
  }
