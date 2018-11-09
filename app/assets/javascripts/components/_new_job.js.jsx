const NewJob = (props) => {

  let formFields = {}
  if (props.bookingReady) {
    var bookingDisplay = <form className="job-form" onSubmit={() => {props.handleJobCreate(formFields.comments.value, formFields.price.value, formFields.day.value, formFields.time.value, formFields.authenticity_token.value)}}>
    <p>Date: <input ref={input => formFields.day = input} type='date' placeholder='Scheduled day' /></p>
    <p>Finished by: <input ref={input => formFields.time = input} type='time' placeholder='Scheduled time' /></p>
    <p>Notes: <textarea ref={input => formFields.comments = input} placeholder='Enter any notes or special instructions'/></p>
    <input ref={input => formFields.authenticity_token = input} type='hidden' name='authenticity_token' value={props.authenticity_token} />
    <button>Submit</button>
    </form>
  } else {
    var bookingDisplay = <button className="booking-button" onClick={() => {props.bookingSwitch()}}>Book Now!</button>
  }

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

      </div>
    </div>
  )
}
