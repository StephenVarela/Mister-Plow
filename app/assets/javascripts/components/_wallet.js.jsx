const Wallet = (props) => {

  let balanceClass = 'balance';
  if (props.balance === 0) {
    balanceClass += 'zero';
  }

    // let amount = +this.refs.amount.value;
    // let newBalance = this.state.balance + amount;

    return(
      <div className="account">
        <h2>Wallet</h2>
        <div className={balanceClass}>{props.balance}</div>
        <input type="text" placeholder="enter an amount" onChange={(e)=> props.changeEvent(e)}/>
        {/* <input type="text" placeholder="enter an amount"  /> */}
        <input type="button" value="Deposit" onClick={(e)=> props.clickEvent(e)}/>
        {/* <button onClick={()=> {props.clickEvent()}}>Click</button> */}

        <form>
           <label>
             BLAH
               <input onChange={(e)=> props.changeEvent(e)}/>
           </label>
           <label>
               BLAH
           </label>
           <button>Send</button>
       </form>
     </div>
    )
}
