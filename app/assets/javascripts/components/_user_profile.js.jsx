const UserProfile = (props) => {

  console.log(props.user);
  var userInfo = <div>
                      <h1>Name: {props.user.first_name} {props.user.last_name}</h1><br/>
                      <h1>Country: {props.user.city_name}, {props.user.country}</h1><br/>
                      <h1>Location: {props.user.street_name}.</h1>
                 </div>
  var bookingDisplay = <button className="user profile" onClick={() => {props.showUserProfile()}}>REEEEEEEEEEEEEEEEEEEEE</button>

    return(
      <div>
        <main>
          <h1>React Modal</h1>
          {bookingDisplay}
          <UserModal show={props.userProfile} handleClose={props.showUserProfile} children={userInfo} />
        </main>
      </div>
    )
}
