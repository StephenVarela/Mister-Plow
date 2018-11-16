class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      availableJobs: [],
      bookedJobs: [],
      completedJobs: [],
      residence: 0,
      bookingForm: false,
      userProfile: false,
      completedJobsModal: false,
      jobModal: null,
      radioStar: 2,
      walletForm: false,
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
    this.showCompletedJobs = this.showCompletedJobs.bind(this);
    this.showWalletForm = this.showWalletForm.bind(this);
  }

  // POST methods
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

  // Modal switches
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
  showCompletedJobs() {
    this.setState((prevState) => ({ completedJobsModal: !prevState.completedJobsModal }));
  }
  showWalletForm() {
    this.setState((prevState) => ({ walletForm: !prevState.walletForm }));
  }
  jobModalSwitchOff() {
    this.setState({jobModal: null})
  }
  jobModalSwitchOn(n) {
    this.setState({jobModal: n})
  }

  // PUT methods
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
      console.log(response);
      return response.json();
    }).catch((error) => {
      alert("Something Went Wrong! Please Refresh This Page")
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
    fetch(('/api/v1/jobs/' + id + '/lifecycle'), {
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
    fetch(('/api/v1/jobs/' + id + '/lifecycle'), {
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
  jobConfirmation(rating, id) {
    let body = JSON.stringify({
      job: {
        confirmation: true,
        rating: rating,
      },
      authenticity_token: this.props.authenticity_token,
    });
    fetch(('/api/v1/jobs/' + id + '/lifecycle'), {
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
    let e_wallet_balance = this.state.balance? this.state.balance : 0
    let body = JSON.stringify({
      user: {
        e_wallet: Number(e_wallet_balance) + Number(formFields.e_wallet.value),
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
      window.location.reload();
    });
  }

  // Helper methods
  dateString(dateTime) {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const timeString = monthNames[dateTime.getMonth()] + ' ' + dateTime.getDate();
    return timeString
  }
  timeString(dateTime) {
    const min = dateTime.getMinutes();
    const minString = (min < 10) ? '0' + min.toString() : min.toString();
    return (dateTime.getHours() === 0 || dateTime.getHours() === 12 ? 12 : dateTime.getHours() % 12) + ':' + minString + (dateTime.getHours() > 11 ? ' PM' : ' AM');
  }
  weekdayString(dateTime) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return weekdays[dateTime.getDay()]
  }

  // Lifecycle methods
  componentDidMount(){
    fetch('/api/v1/jobs.json')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        balance: this.props.user.current_user.e_wallet,
        jobs: data.filter((job) => {
          if (!job.confirmation) { return job }
        }),
        availableJobs: data.filter((job) => {
          if (!job.accepted) { return job }
        }),
        bookedJobs: data.filter((job) => {
          if (job.accepted && !job.check_out) { return job }
        }),
        completedJobs: data.filter((job) => {
          if (this.props.user.current_user.is_shoveler && job.check_out) {
            return job
          } else if (job.rating) {
            return job
          }
        })
      })
    });
  }
  render(){
    let userWidget = this.props.user.current_user.is_shoveler? <MapView residences={this.props.user.job_residences} state={this.state} /> : <NewJob showBookingForm={this.showBookingForm} bookingForm={this.state.bookingForm} handleJobCreate={this.handleJobCreate} residence={this.props.user.residences[this.state.residence]} authenticity_token={this.props.authenticity_token} />;

    let dashboard = [<AllJobs radioStar={this.state.radioStar} showCompletedJobs={this.showCompletedJobs} residenceIndex={this.residenceIndex} timeString={this.timeString} dateString={this.dateString} completedJobsModal={this.state.completedJobsModal} jobConfirmation={this.jobConfirmation} jobComplete={this.jobComplete}checkIn={this.checkIn} jobModalSwitchOff={this.jobModalSwitchOff} jobModalSwitchOn={this.jobModalSwitchOn} jobModal={this.state.jobModal} acceptJob={this.acceptJob} jobDetails={this.jobDetails} residences={this.props.user.job_residences} availableJobs={this.state.availableJobs} bookedJobs={this.state.bookedJobs} completedJobs={this.state.completedJobs} jobs={this.state.jobs} user={this.props.user} key="all-jobs" />, <WeatherApp key="weather-app" weekdayString={this.weekdayString} dateString={this.dateString} timeString={this.timeString} />];
    let dashboardArrangment = this.props.user.current_user.is_shoveler? dashboard : dashboard.reverse();

    return (
      <div>
        <HeaderNav authenticity_token={this.props.authenticity_token} logout={this.logout} showUserProfile={this.showUserProfile} user={this.props.user.current_user}/>
        <main>
          <div className="homepage-title-header">
            <h3>Welcome to</h3>
            <h1>Mr. Plow!</h1>
          </div>
          {userWidget}
          {dashboardArrangment}
          <UserProfile showWalletForm={this.showWalletForm} walletForm={this.state.walletForm} userWallet={this.userWallet} handleDepositClick={this.handleDepositClick} handleValue={this.handleValue} showCompletedJobs={this.showCompletedJobs} user={this.props.user.current_user} userProfile={this.state.userProfile} showUserProfile={this.showUserProfile} />
        </main>
      </div>
    );
  }
}
