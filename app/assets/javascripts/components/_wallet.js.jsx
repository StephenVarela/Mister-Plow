const Wallet = (props) => {

  let balanceClass = 'balance';
  if (props.balance === 0) {
    balanceClass += 'zero';
  }

  let formFields = {}

    return(
      <div className="account">
          <h2>{props.user.first_name}'s Wallet</h2>
          <div className={balanceClass}>{props.balance? props.balance : 0}</div>
          <form onSubmit={(e) => { e.preventDefault(); props.userWallet(formFields); }}>
              <p><input ref={input => formFields.e_wallet = input} placeholder='amount'/></p>
              <p><button type='submit'>Deposit</button></p>
          </form>
       </div>
    )
}
