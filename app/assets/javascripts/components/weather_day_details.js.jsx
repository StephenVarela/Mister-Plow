// constructor(props){
//   super(props)
//   this.state=({
//     icon:'http://openweathermap.org/img/w/03d.png',
//     date: this.props.body[0].date,
//     data: "",
//   })
//   this.logoClick = this.logoClick.bind(this)
// }
//
// logoClick(e){
//   e.preventDefault()
//   this.setState({
//     data: weatherDaysInfo
//   })
// }

const WeatherDayDetails = (props) =>  {

  let weatherDaysInfo = props.body.map((bits, i) => <WeatherHourly subBody = {bits} key = {i}/>)

    return (
      <div>
        <div id = 'icon'>
          <img id="wicon" src={"http://openweathermap.org/img/w/" + props.body[0].weather.icon +".png"} alt="Weather icon" onClick={(e) => {this.logoClick(e)}}/>
        </div>
        <h1>{props.body[0].weather.description}</h1>
        <h1>{props.body[0].datetime}</h1>
        <h4>{props.body[0].weather.main}</h4>
      </div>
    )
  }
