

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      availableJobs: [],
      bookedJobs: [],
      residence: 0,
      bookingForm: false,
      userProfile: false,
      jobModal: null,
      balance: 0,
      value: 0,

    };
    this.handleJobCreate = this.handleJobCreate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.showBookingForm = this.showBookingForm.bind(this);
    this.acceptJob = this.acceptJob.bind(this);
    this.showUserProfile = this.showUserProfile.bind(this);
    this.showBookingDetails = this.showBookingDetails.bind(this);
    this.jobModalSwitchOff = this.jobModalSwitchOff.bind(this);
    this.jobModalSwitchOn = this.jobModalSwitchOn.bind(this);
    this.userWallet = this.userWallet.bind(this);
    this.checkIn = this.checkIn.bind(this);
    this.jobComplete = this.jobComplete.bind(this);
    this.jobConfirmation = this.jobConfirmation.bind(this);


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

  showUserProfile() {
    this.setState((prevState) => ({ userProfile: !prevState.userProfile }));
  }

  showBookingDetails() {
    this.setState((prevState) => ({ bookingDisplay: !prevState.bookingDisplay }));
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
  checkIn(id) {
    let body = JSON.stringify({
      job: {
        check_in: new Date(),
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
  jobComplete(id) {
    let body = JSON.stringify({
      job: {
        check_out: new Date(),
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
  jobConfirmation(id) {
    alert('check out #' + id);
    let body = JSON.stringify({
      job: {
        confirmation: true,
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

  userWallet(formFields) {
    let e_wallet_deposit = this.state.balance? this.state.balance : 0
    console.log(formFields);
    console.log(typeof this.state.balance);
    console.log(this.state.balance);
    console.log(typeof formFields.e_wallet.value);
    console.log(Number(+e_wallet_deposit) + Number(formFields.e_wallet.value));
    let body = JSON.stringify({
      user: {
        e_wallet: Number(+e_wallet_deposit) + Number(formFields.e_wallet.value),
        password: this.props.user.current_user.crypted_password,
      },
      authenticity_token: this.props.authenticity_token,
    });
    fetch(('/api/v1/users/' + this.props.user.current_user.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body,
    }).then((response) => {
      return response.json();
    }).then((reply) => {
      console.log(reply);
      this.setState((prevState) => {
          balance: reply.e_wallet
      })
    });
  }



  componentDidMount(){
    fetch('/api/v1/jobs.json')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        balance: this.props.user.current_user.e_wallet,
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
    let dashboard = [<AllJobs jobConfirmation={this.jobConfirmation} jobComplete={this.jobComplete}checkIn={this.checkIn} jobModalSwitchOff={this.jobModalSwitchOff} jobModalSwitchOn={this.jobModalSwitchOn} jobModal={this.state.jobModal} acceptJob={this.acceptJob} jobDetails={this.jobDetails} residences={this.props.user.job_residences} availableJobs={this.state.availableJobs} bookedJobs={this.state.bookedJobs} jobs={this.state.jobs} user={this.props.user}key="all-jobs" />, <WeatherApp key="weather-app" />];
    let userWidget = this.props.user.current_user.is_shoveler? <MapView residences={this.props.user.job_residences} /> : <NewJob showBookingForm={this.showBookingForm} bookingForm={this.state.bookingForm} handleJobCreate={this.handleJobCreate} residence={this.props.user.residences[this.state.residence]} authenticity_token={this.props.authenticity_token} />;
    let dashboardArrangment = this.props.user.current_user.is_shoveler? dashboard : dashboard.reverse();

    return (
      <div>
        <div className="homepage-title-header">
          <h3>Welcome to</h3>
          <h1>Mr. Plow!</h1>
        </div>
        {userWidget}
        {dashboardArrangment}
        <UserProfile user={this.props.user.current_user} showUserProfile={this.showUserProfile} userProfile={this.state.userProfile}/>
        <Wallet user={this.props.user.current_user} balance={this.state.balance} clickEvent={this.handleDepositClick} changeEvent={this.handleValue} userWallet={this.userWallet}/>

     </div>
    );
  }
}
