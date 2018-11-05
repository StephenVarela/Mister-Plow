const NewJob = (props) => {
  let formFields = {}
 
  return (
    <form>
      <input ref={input => formFields.comments = input} placeholder='Enter a comment'/>
      <input ref={input => formFields.price = input} placeholder='Enter a price' />
      <button>Submit</button>
    </form>
  )
}