class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state=({
      description:'' || "cold",
      icon:'',
      date:'',
      data: [],
      setDescription: '',
    })
    this.weatherClick = this.weatherClick.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  initialize() {
  }

  componentDidMount(e){
    let base = this
    fetch('/api/v1/weather.json')
    .then(function(response){
      return response.json()
    }).then(function(json) {
      let index = 0;
      let weather_samples = [];
       Object.keys(json).forEach(function(sample){
         weather_samples[index] = json[sample];
         index++;
       });
       console.log(weather_samples);
       base.setState({
         data: weather_samples,
       })

       // json.forEach(function(day){
       //   console.log(day)
       // });
     })
       // base.setState({
        // description: json.list[0].weather[0].description,
        // icon: `http://openweathermap.org/img/w/${json.list[0].weather[0].icon}.png`,
        // date: json.list[0].dt_txt
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
        <WeatherDay data={this.state.data}/>
        {/* <WeatherDay weatherClick={this.weatherClick} data={this.state.data} newState={this.state.data}/> */}
      </div>
    )
  }
}
