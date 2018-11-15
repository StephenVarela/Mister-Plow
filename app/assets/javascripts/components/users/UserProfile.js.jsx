const UserProfile = (props) => {
  
  var userInfo = <div>
    <img id="user-profile-pic" />
    <p>Name:</p> <h1>{props.user.first_name} {props.user.last_name}</h1>
    <br />
    <p>Logged in as:</p> <h1>{props.user.is_shoveler? "Shoveler" : "Home Owner"}</h1>
    <br />
    <p>Location:</p> <h1>{props.user.street_name} {props.user.city_name}, {props.user.country} {props.user.postal_code}</h1>
    <br />
    <p>Your wallet:</p> <h1>${props.user.e_wallet}</h1>
    <Wallet walletForm={props.walletForm} showWalletForm={props.showWalletForm} clickEvent={props.handleDepositClick} changeEvent={props.handleValue} userWallet={props.userWallet}/>
    <button onClick={() => {props.showWalletForm()}}>Deposit</button>
    <button onClick={() => {props.showCompletedJobs(); props.showUserProfile()}}>Show completed jobs</button>
  </div>

  return(
    <UserModal show={props.userProfile} handleClose={props.showUserProfile} children={userInfo} />
  )
}
