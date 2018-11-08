class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state=({
      description:'' || "cold",
      icon:'',
      date: '',
      data: this.initialize(),//[[{weather: "cloudy", date:"Monday"}, {weather: "snow", date:"Monday"}], [{weather: "sunny", date:"Tuesday"}, {weather: "sunny", date:"Tuesday"}], [{weather: "snowy", date:"Wednesday"}]],
      showDetailsFor: '',
    })
    this.weatherClick = this.weatherClick.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  initialize() {
    return [[{weather: "cloudy", date:"Monday"}, {weather: "snow", date:"Monday"}], [{weather: "sunny", date:"Tuesday"}, {weather: "sunny", date:"Tuesday"}], [{weather: "snowy", date:"Wednesday"}]]
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
    this.setState({
      data: this.state.data
    })
    // this.state.data.map(data => (
    //   data
    // ))
    // console.log(this.state.data);
  }

  render(){

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
        <WeatherDay weatherClick={this.weatherClick} fakeData={this.state.data} newState={this.state.data}/>
      </div>
    )
  }
}
