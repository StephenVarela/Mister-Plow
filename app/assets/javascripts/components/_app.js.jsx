class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      residence: 0,
      bookingReady: false,
    };

    this.handleJobCreate = this.handleJobCreate.bind(this);
    this.addNewJob = this.addNewJob.bind(this)
    this.bookingSwitch = this.bookingSwitch.bind(this)
  }

  handleJobCreate(jobForm) {
    let body = JSON.stringify({
      job: {
        instructions: jobForm.instructions.value,
        price: 15,
        scheduled_time: new Date(jobForm.day.value + ' ' + jobForm.time.value).getTime(),
        residence_id: this.props.user.residences[this.state.residence].id,
      },
      authenticity_token: jobForm.authenticity_token.value,
    });
    alert(body)
    fetch('/api/v1/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
    .then((response) => {
      return response.json()
    })
    .then((job) => {
      this.addNewJob(job)
    });
  }
  addNewJob(job) {
    this.setState({
      jobs: this.state.jobs.concat(job),
    });
  }

  bookingSwitch() {
    this.setState({
      bookingReady: true,
    });
    console.log("I'm here");
  }
  componentDidMount(){
    fetch('/api/v1/jobs.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ jobs: data })
    });
  }

  render(){
    let dashboard = [<AllJobs jobs={this.state.jobs} user={this.props.user.current_user}key="all-jobs" />, <WeatherApp key="weather-app" />];
    
    let userWidget = this.props.user.current_user.is_shoveler? <MapView /> : <NewJob bookingSwitch={this.bookingSwitch} bookingReady={this.state.bookingReady} handleJobCreate={this.handleJobCreate} residence={this.props.user.residences[this.state.residence]} authenticity_token={this.props.authenticity_token} />;
    let dashboardArrangment = this.props.user.current_user.is_shoveler? dashboard : dashboard.reverse();

    return (
      <div>
        <div className="homepage-title-header">
          <h3>Welcome to</h3>
          <h1>Mr Plow!</h1>
        </div>
        
        {userWidget}
        {dashboardArrangment}

      </div>
    );
  }
}
