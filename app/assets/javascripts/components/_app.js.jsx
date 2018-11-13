class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      availableJobs: [],
      bookedJobs: [],
      residence: 0,
      bookingForm: false,
      jobModal: null,
    };
    this.handleJobCreate = this.handleJobCreate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.showBookingForm = this.showBookingForm.bind(this);
    this.jobDetails = this.jobDetails.bind(this);
    this.acceptJob = this.acceptJob.bind(this);
    this.showBookingDetails = this.showBookingDetails.bind(this);
    this.jobModalSwitchOff = this.jobModalSwitchOff.bind(this);
    this.jobModalSwitchOn = this.jobModalSwitchOn.bind(this);
  }

  jobModalSwitchOff() {
    this.setState({jobModal: null})
  }
  jobModalSwitchOn(n) {
    this.setState({jobModal: n})
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
  handleLogin(form) {
    let body = JSON.stringify({
      session: {
        email: form.email.value,
        password: form.password.value,
      },
      authenticity_token: form.authenticity_token.value,
    });
    fetch('/api/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body,
    })
    .then((response) => {
      return response.json()
    })
    .then(() => {
      window.location.reload();
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

  showBookingDetails() {
    this.setState((prevState) => ({ bookingDisplay: !prevState.bookingDisplay }));
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
    console.log(this.props.authenticity_token)
    console.log('WHERE YOU AT')
    let dashboard = [<AllJobs jobModalSwitchOff={this.jobModalSwitchOff} jobModalSwitchOn={this.jobModalSwitchOn} jobModal={this.state.jobModal} acceptJob={this.acceptJob} jobDetails={this.jobDetails} residences={this.props.user.job_residences} availableJobs={this.state.availableJobs} bookedJobs={this.state.bookedJobs} jobs={this.state.jobs} user={this.props.user}key="all-jobs" />, <WeatherApp key="weather-app" />];
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
