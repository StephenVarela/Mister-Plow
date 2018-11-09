class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      residence: 0
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewJob = this.addNewJob.bind(this)
  }

  handleFormSubmit(comments, price, day, time, authenticity_token) {
    let body = JSON.stringify({
      job: {
        comments: comments,
        price: price,
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
      jobs: this.state.jobs.concat(job)
    });
  }
  componentDidMount(){
    fetch('/api/v1/jobs.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ jobs: data })
    });
  }
  render(){
    console.log(this.props.user.current_user)
    let userWidget = this.props.user.current_user.is_shoveler? <MapView /> : <NewJob handleFormSubmit={this.handleFormSubmit} authenticity_token={this.props.authenticity_token} />;

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
