const NewJob = (props) => {

  let formFields = {}
  var bookingForm = <form className="job-form" onSubmit={() => {props.handleJobCreate(formFields); props.showBookingForm();}}>
    <p className="date-box">Date: <input ref={input => formFields.day = input} type='date' placeholder='Scheduled day' /></p>
    <p className="time-box">Finished by: <input ref={input => formFields.time = input} type='time' placeholder='Scheduled time' /></p>
    <p className="textarea"><textarea ref={input => formFields.instructions = input} placeholder='Notes'/></p>
    <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
    <button>Submit</button>
  </form>

  var bookingDisplay = <button className="booking-button" onClick={() => {props.showBookingForm()}}>Book Now!</button>

  return (
    <div className="job-booking" >
      <h2>Book a New Job</h2>
      <div className="job-booking-display">

        <div className="residence-details">
          <div className="residence-pic-border" id="maskelement">
            <img className="residence-pic"/>
          </div>

          <ul>
            <li><h2>{props.residence.street_name}</h2></li>
            <li><h2>{props.residence.city_name}</h2></li>
            <li><h2>{props.residence.postal_code}</h2></li>
          </ul>
        </div>

        {bookingDisplay}

        <Modal type={"modal-main"} show={props.bookingForm} handleClose={props.showBookingForm} children={bookingForm} />
      </div>
    </div>
  )
}
