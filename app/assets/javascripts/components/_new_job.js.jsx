const NewJob = (props) => {

  let formFields = {}
  var bookingForm = <form className="job-form" onSubmit={() => {props.handleJobCreate(formFields); props.showBookingForm();}}>
    <p>Date: <input ref={input => formFields.day = input} type='date' placeholder='Scheduled day' /></p>
    <p>Finished by: <input ref={input => formFields.time = input} type='time' placeholder='Scheduled time' /></p>
    <p>Notes: <textarea ref={input => formFields.instructions = input} placeholder='Special instructions'/></p>
    <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
    <button>Submit</button>
  </form>

  var bookingDisplay = <button className="booking-button" onClick={() => {props.showBookingForm()}}>Book Now!</button>

  return (
    <div className="job-booking" >
      <h2>Book a New Job</h2>
      <div className="job-booking-display">

        <div className="residence-details">
          <div className="residence-pic-border">
            <img className="residence-pic"/>
          </div>

          <ul>
            <li><h2>{props.residence.street_name}</h2></li>
            <li><h2>{props.residence.city_name}</h2></li>
            <li><h2>{props.residence.postal_code}</h2></li>
          </ul>
        </div>

        {bookingDisplay}

        <Modal show={props.bookingForm} handleClose={props.showBookingForm} children={bookingForm} />
      </div>
    </div>
  )
}
