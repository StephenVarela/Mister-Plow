class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUserForm: false,
    }
  }
  showNewUserForm() {
    this.setState((prevState) => ({ newUserForm: !prevState.newUserForm }));
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

  render() {
    const newUserForm = <NewUser />
    const formFields = {}
    return (
      <div className="landing-container">
        <h1 className="landing-header">Mr Plow</h1>
        <h2 className="landing-sub-header">Welcome</h2>
        <form onSubmit={(e) => {e.preventDefault(); this.handleLogin(formFields); }}>
          <p><input ref={input => formFields.email = input} placeholder='E-mail' /></p>
          <p><input type='password' ref={input => formFields.password = input} placeholder='Password' /></p>
          <p><button type='submit'>Login</button></p>
          <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        </form>
        <p className="new-account" onClick={() => {this.showNewUserForm()}}>create a new account</p>
        <Modal show={this.state.newUserForm} handleClose={() => {this.showNewUserForm()}} children={newUserForm}/>
      </div>
    )
  }
}