class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state=({
      description:'' || "cold",
      icon:'',
      date:'',
    })
  }

  eventClick(e){
    let base = this
    e.preventDefault()
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Toronto,us&appid=7c18018d13139c6172b7a3dfa1ad68d7&&units')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log(json.list)
      base.setState(prevState => ({
        description: json.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/w/${json.list[0].weather[0].icon}.png`,
        date: json.list[0].dt_txt
      }))
    })
  }

  weatherClick(){
    console.log({fakeData});
  }

  render(){
    let fakeData = [[{weather: "cloudy", date:"Monday"}, {weather: "cloudy", date:"Monday"}], [{weather: "sunny", date:"Tuesday"}, {weather: "sunny", date:"Tuesday"}], [{weather: "snowy", date:"Wednesday"}]]
    return(
      <div>
        <h1> Weather Alert! </h1>
        Check out your weather!
        <div id = 'icon'>
          <img id="wicon" src={this.state.icon} alt="Weather icon"/>
        </div>
        <p>Toronto: is currently {this.state.description}</p>
        <p>{this.state.date}</p>
        <button onClick={(e)=> this.eventClick(e)}> Click me </button>
        <WeatherDay weatherClick={this.weatherClick} fakeData={fakeData}/>
      </div>
    )
  }
}
