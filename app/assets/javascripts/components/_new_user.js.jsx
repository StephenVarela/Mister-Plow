class NewUser extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(
    first_name,
    last_name,
    street_name,
    city_name,
    postal_code,
    country,
    email,
    primary_contact_number,
    secondary_contact_number,
    password,
    password_confirmation,
    ) {
    let body = JSON.stringify({
      user: {
        first_name: first_name,
        last_name: last_name,
        street_name: street_name,
        city_name: city_name,
        postal_code: postal_code,
        country: country,
        email: email,
        primary_contact_number: primary_contact_number,
        secondary_contact_number: secondary_contact_number,
        password: password,
        password_confirmation: password_confirmation
      }
    });
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
    .then((response) => {
      return response.json()
    })
  }
  render() {
    let formFields = {}

    return (
      <form onSubmit={(e) => {
        this.handleFormSubmit(
            formFields.first_name.value,
            formFields.last_name.value,
            formFields.street_name.value,
            formFields.city_name.value,
            formFields.postal_code.value,
            formFields.country.value,
            formFields.email.value,
            formFields.primary_contact_number.value,
            formFields.secondary_contact_number.value,
            formFields.password.value,
            formFields.password_confirmation.value
          );
          e.target.reset();        
        }}>
        <p><input ref={input => formFields.first_name = input} placeholder='First Name'/></p>
        <p><input ref={input => formFields.last_name = input} placeholder='Last Name' /></p>
        <p><input ref={input => formFields.street_name = input} placeholder='Street Name' /></p>
        <p><input ref={input => formFields.city_name = input} placeholder='City Name' /></p>
        <p><input ref={input => formFields.postal_code = input} placeholder='Postal Code' /></p>
        <p><input ref={input => formFields.country = input} placeholder='Country' /></p>
        <p><input ref={input => formFields.email = input} placeholder='E-mail' /></p>
        <p><input ref={input => formFields.primary_contact_number = input} placeholder='Primary Contact Number' /></p>
        <p><input ref={input => formFields.secondary_contact_number = input} placeholder='Secondary Contact Number' /></p>
        <p><input type='password'ref={input => formFields.password = input} placeholder='Password' /></p>
        <p><input type='password'ref={input => formFields.password_confirmation = input} placeholder='Password Confirmation' /></p>
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <p><button>Sign Up</button></p>
      </form>
    )
  }
}