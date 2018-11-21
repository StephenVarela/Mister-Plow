class GuestLogin extends React.Component {
  loginFetch(body, url) {
    fetch('/api/v1/' + url, {
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
    .catch(()=>{
      alert("E-mail or password is invalid")
    })
    .then(() => {
      window.location.reload()
    })
  }
  guestLogin(account) {
    let body = JSON.stringify({
      session: {
        email: account,
        password: '123456'
      },
      authenticity_token: this.props.authenticity_token,
    })
    this.loginFetch(body, 'sessions');
  }
  handleLogin(form) {
    let body = JSON.stringify({
      session: {
        email: form.email.value,
        password: form.password.value,
      },
      authenticity_token: this.props.authenticity_token,
    });
    this.loginFetch(body, 'sessions')
  }

  render() {    
    return (
      <div className="landing-container">
        <h1 className="landing-header">Mr. Plow</h1>
        <h2 className="landing-sub-header">Welcome</h2>
        <button onClick={() => {this.guestLogin('guest@mrplow.com')}}>Try as Homeowner</button>
        <button onClick={() => {this.guestLogin('guestshoveler@mrplow.com')}}>Try as Shoveler</button>
      </div>
    )
  }
}
