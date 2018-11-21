const JobPosts = (props) => {

  function residenceIndex(residence_id) {
    if (props.residences.length) {
      for (let i = 0; i < props.residences.length; i++) {
         if (props.residences[i].id === residence_id) {
            return i;
         }
      }
    }
  }

  const jobs = props.jobs.map((job) => {

    const dateTime = new Date(job.scheduled_time);
    const status = job.confirmation? 'Approved' : props.is_shoveler? job.accepted? job.check_in? job.check_out? 'Checked-Out' : 'Checked-In' : 'Accepted' : 'Available' : job.accepted? job.check_in? job.check_out? 'Complete' : 'Active' : 'Booked' : 'Pending...';
    const adressTitle = props.is_shoveler? <p>Adress info:</p> : ''
    const adressInfo = props.is_shoveler && props.residences[residenceIndex(job.residence_id)]? <a src="/" className="address-link"> <h3>{props.residences[residenceIndex(job.residence_id)].street_name}</h3></a> : ''
    const jobButton = props.is_shoveler? job.check_out? '' : <button className="job-accept-button" onClick={() => {props.jobModalSwitchOn(job.id)}}>{job.accepted? "Details" : "Accept"}</button> : <button onClick={() => {props.jobModalSwitchOn(job.id)}} className="job-display-button">Details</button>;
    
    console.log(dateTime)
    const jobDetails = <div className="job-date-time">
      <div className="job-date-time-titles">
        <p>Booked for: </p>
        <p>To be finished by: </p>
        {adressTitle}
      </div>
      <div className="job-date-time-data">
        <h3>{props.dateString(dateTime)}</h3>
        <h3>{props.timeString(dateTime)}</h3>
        {adressInfo}
      </div>
    </div>

    function stars(num) {
      return '*'.repeat(num);
    }
    

    const jobRating = job.rating? <div className="rating-display">
      <p>Rating:</p>
      <h2>{ stars(job.rating) }</h2>
    </div> : ''

    let formFields = {};

    const ratingForm = <div>
      <p>Rating:</p>
      <form className="rating" onSubmit={(e) => { e.preventDefault(); props.jobConfirmation(formFields.rating.value, job.id)}}>
          <select ref={input => formFields.rating = input}>
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
          <button type="submit">Submit Rating</button>
      </form>
    </div>
      

    const jobStatus = <div className="job-display-status">
      <p>Status:</p>
      <h2>{status}</h2>
    </div>
    
    const instructions = job.instructions? <div className="job-display-instructions">
      <p>Instructions:</p>
      <h2>{job.instructions}</h2>
    </div> : ''

    const comments = job.comments? <div className="job-display-instructions">
      <p>Comments:</p>
      <p>{job.comments}</p>
    </div> : <div> </div>

    const checkInBtn = job.confirmation? '' : props.is_shoveler? job.accepted? job.check_in? job.check_out? '' : <button onClick={() => {props.jobComplete(job.id)}}>Confirm Finished</button> : <button onClick={() => {props.checkIn(job.id)}}>Check-In</button> : <button onClick={() => {props.acceptJob(job.id)}}>Accept Job</button> : ''
    const checkInTime = new Date(job.check_in);
    const jobModalContent = <div className="job-modal">{jobDetails}{jobStatus}{!props.is_shoveler && job.check_out? ratingForm : instructions }{checkInBtn}{job.check_in? job.check_out? props.is_shoveler? job.confirmation? '' : <p>Awaiting customer approval...</p> : '' : <div><p>Checked in at:</p><h3>{props.timeString(checkInTime)} on {props.dateString(checkInTime)}</h3></div> : ''}</div>
    
    return(
      <div key={job.id} className="job-display">
        {jobDetails}
        {job.confirmation? jobRating : jobStatus}
        {job.confirmation? comments : jobButton}
        <Modal type={"modal-main"} show={props.jobModal === job.id} handleClose={props.jobModalSwitchOff} children={jobModalContent} />
      </div>
    )
  });
  
  return <div>{jobs}</div>;
}