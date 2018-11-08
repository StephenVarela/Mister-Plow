const WeatherDay =(props)=>  {

  let weatherDays = props.fakeData.map((data, index) => (
    <WeatherDayDetails body ={data} key = {index} weatherClick={props.weatherClick} newState={props.newState}/>
  ))


    return (
      <div>
        {weatherDays}
      </div>
    )
  }
