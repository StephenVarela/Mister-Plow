class WeatherDayDetails extends React.Component  {
  constructor(props){
    super(props)
    this.state=({
      icon:'http://openweathermap.org/img/w/03d.png',
      date: this.props.body[0].date,
      data: "",
    })
    this.logoClick = this.logoClick.bind(this)
  }

  logoClick(e){
    e.preventDefault()
    let weatherDaysInfo = this.props.body.map((bits, i) => <WeatherHourly subBody = {bits} key = {i}/>)
    this.setState({
      data: weatherDaysInfo
    })
  }


  render() {

    return (
      <div>
        <div id = 'icon'>
          <img id="wicon" src={this.state.icon} alt="Weather icon" onClick={(e) => {this.logoClick(e)}}/>
        </div>
        <h1>{this.state.date}</h1>
        <h4>{this.state.data}</h4>
      </div>
    )
  }

  }
