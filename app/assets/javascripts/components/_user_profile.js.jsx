const UserProfile = (props) => {
  
  var userInfo = <div>
    <img id="user-profile-pic" />
    <h1>Name: {props.user.first_name} {props.user.last_name}</h1>
    <h1>Location: {props.user.street_name} {props.user.city_name}, {props.user.country}</h1>
  </div>
  var bookingDisplay = <button className="user profile" onClick={() => {props.showUserProfile()}}>REEEEEEEEEEEEEEEEEEEEE</button>

    return(
      <div>
        <main>
          {bookingDisplay}
          <UserModal show={props.userProfile} handleClose={props.showUserProfile} children={userInfo} />
        </main>
        <h1> hello </h1>
      </div>
    )
}
