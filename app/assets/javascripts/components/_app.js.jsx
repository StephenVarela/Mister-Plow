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

  handleJobCreate(comments, day, time, authenticity_token) {
    let body = JSON.stringify({
      job: {
        comments: comments,
        price: 15,
        scheduled_time: new Date(day + ' ' + time).getTime(),
        residence_id: this.props.user.residences[this.state.residence].id
      },
      authenticity_token: authenticity_token,
    });
    alert(body)
    fetch('http://localhost:3000/api/v1/jobs', {
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
    let userWidget = this.props.user.current_user.is_shoveler? <MapView /> : <NewJob bookingSwitch={this.bookingSwitch} bookingReady={this.state.bookingReady} handleJobCreate={this.handleJobCreate} residence={this.props.user.residences[this.state.residence]} authenticity_token={this.props.authenticity_token} />;

    return (
      <div>
        <div className="homepage-title-header">
          <h3>Welcome to</h3>
          <h1>Mr Plow!</h1>
        </div>
        
        {userWidget}
        
        <WeatherApp />
        
        <AllJobs jobs={this.state.jobs} />
      </div>
    );
  }
}
