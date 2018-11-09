const NewJob = (props) => {

  let formFields = {}

  return (
    <form className="job-form" onSubmit={() => {props.handleFormSubmit(formFields.comments.value, formFields.price.value, formFields.day.value, formFields.time.value, formFields.authenticity_token.value)}}>
      <h2>Book a New Job</h2>
      <p><input ref={input => formFields.comments = input} placeholder='Enter a comment'/></p>
      <p><input ref={input => formFields.price = input} placeholder='Enter a price' /></p>
      <p><input ref={input => formFields.day = input} type='date' placeholder='Scheduled day' /></p>
      <p><input ref={input => formFields.time = input} type='time' placeholder='Scheduled time' /></p>
      <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
      <button>Submit</button>
    </form>
  )
}
