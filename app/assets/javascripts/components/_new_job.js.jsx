const NewJob = (props) => {
  let formFields = {}
 
  return (
    <form onSubmit={(e) => {
      props.handleFormSubmit(formFields.name.value, formFields.description.value);
      e.target.removeEventListener();}}>
      
      <input ref={input => formFields.comments = input} placeholder='Enter a comment'/>
      <input ref={input => formFields.price = input} placeholder='Enter a price' />
      <button>Submit</button>
    </form>
  )
}