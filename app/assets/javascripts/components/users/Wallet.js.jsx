const Wallet = (props) => {

  let balanceClass = 'balance';
  if (props.balance === 0) {
    balanceClass += 'zero';
  }

  const walletForm = <form onSubmit={(e) => { e.preventDefault(); props.userWallet(formFields); }}>
    <p><input ref={input => formFields.e_wallet = input} placeholder='amount'/></p>
    <p><button type='submit'>Deposit</button></p>
  </form>

  let formFields = {}

    return(
      <div className="account">
          {/* <div className={balanceClass}>{props.balance? props.balance : 0}</div> */}
        <Modal type={"modal-main"} show={props.walletForm} handleClose={props.showWalletForm} children={walletForm} />
      </div>
    )
}
