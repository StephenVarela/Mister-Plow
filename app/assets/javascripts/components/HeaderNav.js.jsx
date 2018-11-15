const HeaderNav = (props) => {
  return <nav className="home-nav">
    <div><a className="user-profile-button" onClick={() => {props.showUserProfile()}}>{props.user.first_name + ' ' + props.user.last_name + ' '}</a> - {props.user.is_shoveler? 'Shoveler' : 'Home Owner'} Profile</div><div><a href="/">Mr Plow</a> | <a rel="nofollow" data-method="post" href="/api/v1/logout">Logout</a></div>
  </nav>
}