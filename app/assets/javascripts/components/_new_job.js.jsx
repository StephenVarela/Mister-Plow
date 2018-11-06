const NewJob = (props) => {

  let formFields = {}

  return (
    <form onSubmit={(e) => {props.handleFormSubmit(formFields.comments.value, formFields.price.value); e.target.reset();}}>
      <input ref={input => formFields.comments = input} placeholder='Enter a comment'/>
      <input ref={input => formFields.price = input} placeholder='Enter a price' />
      <input type='hidden' name='authenticity_token' value={props.authenticity_token} />
      <button>Submit</button>
    </form>
  )
}
