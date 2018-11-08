class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeResidence: true,
      addressForm: true,
      isHomeResidence: 'checked'
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.residenceOption = this.residenceOption.bind(this)
    this.homeAdress = this.homeAdress.bind(this)
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
    user_type,
    authenticity_token) {

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
        password_confirmation: password_confirmation,
      },
      authenticity_token: authenticity_token
    });
    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body,
    }).then((response) => {
      return response.json()
    }).then((newUser) => {
      if (user_type === 'home_owner') {
        let homeBody = JSON.stringify({
          home_owner: {
            user_id: newUser.id
          },
          authenticity_token: authenticity_token
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
          let residence_street = this.state.addressForm? street_name : res_street_name
          let residence_city = this.state.addressForm? city_name : res_city_name
          let residence_postal = this.state.addressForm? postal_code : res_postal_code
          let residence_country = this.state.addressForm? country : res_country
          
          let resBody = JSON.stringify({
            residence: {
              home_owner_id: newHomeOwner.id,
              street_name: residence_street,
              city_name: residence_city,
              postal_code: residence_postal,
              country: residence_country,
              is_home_address: this.state.addressForm
            },
            authenticity_token: authenticity_token
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
      } else if (user_type === 'shoveler') {
        let shovelBody = JSON.stringify({
          shoveler: {
            user_id: newUser.id,
            rating: null
          },
          authenticity_token: authenticity_token
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
      this.setState({homeResidence: false})
    } else if (option === 'home_owner') {
      this.setState({homeResidence: true})
    }
  }
  homeAdress() {
    if (this.state.addressForm === false) {
      this.setState({isHomeResidence: 'checked', addressForm: true})
    } else {
      this.setState({isHomeResidence: '', addressForm: false})
    }
  }

  render() {
    <NewUserForm homeResidence={this.state.homeResidence}/>
  }
}