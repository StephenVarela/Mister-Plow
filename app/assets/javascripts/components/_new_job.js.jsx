const NewJob = (props) => {

  let formFields = {}

  return (
    <form onSubmit={() => {props.handleFormSubmit(formFields.comments.value, formFields.price.value, formFields.day.value, formFields.time.value, formFields.authenticity_token.value)}}>
      <input ref={input => formFields.comments = input} placeholder='Enter a comment'/>
      <input ref={input => formFields.price = input} placeholder='Enter a price' />
      <input ref={input => formFields.day = input} type='date' placeholder='Scheduled day' />
      <input ref={input => formFields.time = input} type='time' placeholder='Scheduled time' />
      <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
      <button>Submit</button>
    </form>
  )
}
