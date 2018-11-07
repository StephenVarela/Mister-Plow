const NewJob = (props) => {

  let formFields = {}

  return (
    <form onSubmit={(e) => {props.handleFormSubmit(formFields.comments.value, formFields.price.value)}}>
      <input ref={input => formFields.comments = input} placeholder='Enter a comment'/>
      <input ref={input => formFields.price = input} placeholder='Enter a price' />
      <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
      <button>Submit</button>
    </form>
  )
}
