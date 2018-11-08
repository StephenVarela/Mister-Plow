const NewUserForm = (props) => {
  let formFields = {}
    let homeResidence = props.homeResidence? <p>Residence is Home Address: <input type='checkbox' checked={props.isHomeResidence} onChange={() => this.homeAdress()} ref={input => formFields.home_address = input} name='is_home-adress' value={true} /></p> : ''
    
    if (this.state.addressForm === true) {
      var addressForm = ''
    } else {
      var addressForm = 
        [<p key={'city'}><input ref={input => formFields.res_city_name = input} placeholder='City Name' /></p>,
        <p key={'postal'}><input ref={input => formFields.res_postal_code = input} placeholder='Postal Code' /></p>,
        <p key={'street'}><input ref={input => formFields.res_street_name = input} placeholder='Street Name' /></p>,
        <p key={'country'}><input ref={input => formFields.res_country = input} placeholder='Country' /></p>]
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
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
            formFields.password_confirmation.value,
            formFields.user_type.value,
            formFields.authenticity_token.value,
          );
          e.target.reset();
        }}>
        <p><input ref={input => formFields.first_name = input} placeholder='First Name'/></p>
        <p><input ref={input => formFields.last_name = input} placeholder='Last Name' /></p>
        <p><input ref={input => formFields.city_name = input} placeholder='City Name' /></p>
        <p><input ref={input => formFields.postal_code = input} placeholder='Postal Code' /></p>
        <p><input ref={input => formFields.street_name = input} placeholder='Street Name' /></p>
        <p><input ref={input => formFields.country = input} placeholder='Country' /></p>
        <p><input ref={input => formFields.email = input} placeholder='E-mail' /></p>
        <p><input ref={input => formFields.primary_contact_number = input} placeholder='Primary Contact Number' /></p>
        <p><input ref={input => formFields.secondary_contact_number = input} placeholder='Secondary Contact Number' /></p>
        <p><input type='password' ref={input => formFields.password = input} placeholder='Password' /></p>
        <p><input type='password' ref={input => formFields.password_confirmation = input} placeholder='Password Confirmation' /></p>
        <p>I am a: <select ref={input => formFields.user_type = input} onChange = {() => {this.residenceOption(formFields.user_type.value)}}>
          <option value="home_owner">Homeowner</option>  
          <option value="shoveler">Shoveler</option>  
        </select></p>
        
        {homeResidence}
        {addressForm}

        <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <p><button type='submit'>Sign Up</button></p>
      </form>
    )
}
