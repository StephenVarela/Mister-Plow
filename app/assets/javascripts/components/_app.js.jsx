class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      availableJobs: [],
      bookedJobs: [],
      residence: 0,
      bookingForm: false,
    };
    this.handleJobCreate = this.handleJobCreate.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.showBookingForm = this.showBookingForm.bind(this);
    this.jobDetails = this.jobDetails.bind(this);
    this.acceptJob = this.acceptJob.bind(this);
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
      this.addNewJob(job);
    });
  }

  addNewJob(job) {
    this.setState({
      jobs: this.state.jobs.concat(job),
    });
  }
  showBookingForm() {
    this.setState((prevState) => ({ bookingForm: !prevState.bookingForm }));
  }
  jobDetails() {
    alert('The details');
  }

  acceptJob(id) {
    let body = JSON.stringify({
      job: {
        accepted: true,
        shoveler_id: this.props.user.shoveler.id,
      },
      authenticity_token: this.props.authenticity_token,
    });
    fetch(('/api/v1/jobs/' + id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body,
    }).then((response) => {
      return response.json();
    }).then(() => {
      window.location.reload();
    });
  }

  componentDidMount(){
    fetch('/api/v1/jobs.json')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        jobs: data,
        availableJobs: data.filter((job) => {
          if (!job.accepted) { return job }
        }),
        bookedJobs: data.filter((job) => {
          if (job.accepted) { return job }
        })
      })
    });
  }

  render(){


    let dashboard = [<AllJobs acceptJob={this.acceptJob} jobDetails={this.jobDetails} residences={this.props.user.job_residences} availableJobs={this.state.availableJobs} bookedJobs={this.state.bookedJobs} jobs={this.state.jobs} user={this.props.user}key="all-jobs" />, <WeatherApp key="weather-app" />];
    let userWidget = this.props.user.current_user.is_shoveler? <MapView residences={this.props.user.job_residences} /> : <NewJob showBookingForm={this.showBookingForm} bookingForm={this.state.bookingForm} handleJobCreate={this.handleJobCreate} residence={this.props.user.residences[this.state.residence]} authenticity_token={this.props.authenticity_token} />;
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
