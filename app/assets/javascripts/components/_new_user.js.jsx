class NewUser extends React.Component {
  handleFormSubmit(a, b) {
    alert(a + ' ' + b)
  }
  render() {
    let formFields = {}

    return (
      <form onSubmit={(e) => {this.handleFormSubmit(formFields.first_name.value, formFields.last_name.value); e.target.reset();}}>
        <p><input ref={input => formFields.first_name = input} placeholder='First Name'/></p>
        <p><input ref={input => formFields.last_name = input} placeholder='Last Name' /></p>
        <p><input ref={input => formFields.street_name = input} placeholder='Street Name' /></p>
        <p><input ref={input => formFields.city_name = input} placeholder='City Name' /></p>
        <p><input ref={input => formFields.postal_code = input} placeholder='Postal Code' /></p>
        <p><input ref={input => formFields.country = input} placeholder='Country' /></p>
        <p><input ref={input => formFields.email = input} placeholder='E-mail' /></p>
        <p><input ref={input => formFields.primary_contact_number = input} placeholder='Primary Contact Number' /></p>
        <p><input ref={input => formFields.secondary_contact_number = input} placeholder='Secondary Contact Number' /></p>
        <p><input ref={input => formFields.password = input} placeholder='Password' /></p>
        <p><input ref={input => formFields.password_confirmation = input} placeholder='Password Confirmation' /></p>
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <p><button>Sign Up</button></p>
      </form>
    )
  }
}