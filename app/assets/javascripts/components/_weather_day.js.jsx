const WeatherDay =(props)=>  {

  // let weatherDays = props.data.map((data, index) => (
  //   <WeatherDayDetails body ={data} key = {index} weatherClick={props.weatherClick} newState={props.newState}/>
  // ))

  let weatherDays = props.data.map((data, index) => (
    data[0].weather.description
  ))

// console.log(typeof props.data[0]);
// console.log(props.data[0]);
// window.stuff = props.data
    return (
      <div>
        {weatherDays}
      </div>
    )
  }
