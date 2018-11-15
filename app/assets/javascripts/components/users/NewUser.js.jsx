class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeOwner: true,
      addressForm: true,
      homeIsResidence: 'checked'
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.residenceOption = this.residenceOption.bind(this)
    this.homeAddress = this.homeAddress.bind(this)
  }
  handleFormSubmit(formFields) {
    var body = {
      user: {
        first_name: formFields.first_name.value,
        last_name: formFields.last_name.value,
        street_name: formFields.street_name.value,
        city_name: formFields.city_name.value,
        postal_code: formFields.postal_code.value,
        country: formFields.country.value,
        email: formFields.email.value,
        primary_contact_number: formFields.primary_contact_number.value,
        secondary_contact_number: formFields.secondary_contact_number.value,
        password: formFields.password.value,
        password_confirmation: formFields.password_confirmation.value,
      },
      authenticity_token: formFields.authenticity_token.value
    }
    if (this.state.isHomeOwner === false) {
      body.user.is_shoveler = true
    }
    var postBody = JSON.stringify(body);
    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: postBody,
    }).then((response) => {
      return response.json()
    }).then((newUser) => {
      if (this.state.isHomeOwner) {
        let homeBody = JSON.stringify({
          home_owner: {
            user_id: newUser.id
          },
          authenticity_token: formFields.authenticity_token.value
        });
        fetch('/api/v1/home_owners', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: homeBody,
        }).then((response) => {
          return response.json()
        }).then((newHomeOwner) => {
          let residence_street = this.state.addressForm? formFields.street_name.value : formFields.res_street_name.value
          let residence_city = this.state.addressForm? formFields.city_name.value : formFields.res_city_name.value
          let residence_postal = this.state.addressForm? formFields.postal_code.value : formFields.res_postal_code.value
          let residence_country = this.state.addressForm? formFields.country.value : formFields.res_country.value
          let resBody = JSON.stringify({
            residence: {
              home_owner_id: newHomeOwner.id,
              street_name: residence_street,
              city_name: residence_city,
              postal_code: residence_postal,
              country: residence_country,
              is_home_address: this.state.addressForm
            },
            authenticity_token: this.props.authenticity_token
          });
          fetch('/api/v1/residences', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: resBody,
          }).then((response) => {
            return response.json()
          }).then(() => {
            window.location.reload();
          });
        });
      } else {
        let shovelBody = JSON.stringify({
          shoveler: {
            user_id: newUser.id,
            rating: null
          },
          authenticity_token: formFields.authenticity_token.value
        });
        fetch('/api/v1/shovelers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: shovelBody,
        }).then((response) => {
          return response.json()
        }).then(() => {
          window.location.reload();
        });
      }
    });
  }
  residenceOption(option) {
    if (option === 'shoveler') {
      this.setState({isHomeOwner: false})
    } else if (option === 'home_owner') {
      this.setState({isHomeOwner: true})
    }
  }
  homeAddress() {
    if (this.state.addressForm === false) {
      this.setState({homeIsResidence: 'checked', addressForm: true})
    } else {
      this.setState({homeIsResidence: '', addressForm: false})
    }
  }
  render() {
    return (
      <NewUserForm formData={this.formData} isHomeOwner={this.state.isHomeOwner} homeIsResidence={this.state.homeIsResidence} homeAddress={this.homeAddress} addressForm={this.state.addressForm} handleFormSubmit={this.handleFormSubmit} residenceOption={this.residenceOption} authenticity_token={this.props.authenticity_token}/>
    )
  }
}
