const AllJobs = (props) => {
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
  function residenceIndex(residence_id) {
    if (props.residences.length) {
      for (let i = 0; i < props.residences.length; i++) {
         if (props.residences[i].id === residence_id) {
            return i;
         }
      }
    }
  }

  function jobPost(array) {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let jobs = array.map((job) => {

      const dateTime = new Date(job.scheduled_time);
      const dateString = monthNames[dateTime.getMonth()] + ' ' + dateTime.getDate();
      const timeString = (dateTime.getHours() === 0 || dateTime.getHours() === 12 ? 12 : dateTime.getHours() % 12) + ':' + pad(dateTime.getMinutes()) + (dateTime.getHours() > 11 ? ' PM' : ' AM');

      const status = job.confirmation? 'Approved' : props.user.current_user.is_shoveler? job.accepted && job.shoveler_id === props.user.shoveler.id? job.check_in? job.check_out? 'Checked-Out' : 'Checked-In' : 'Accepted' : 'Available' : job.accepted? job.check_in? job.check_out? 'Complete' : 'Active' : 'Confirmed' : 'Pending...';

      const adressTitle = props.user.current_user.is_shoveler? <p>Adress info:</p> : ''
      const adressInfo = props.user.current_user.is_shoveler && props.residences[residenceIndex(job.residence_id)]? <a src="/" className="address-link"><h3>{props.residences[residenceIndex(job.residence_id)].street_name}</h3></a> : ''
      const jobButton = props.user.current_user.is_shoveler? <button className="job-accept-button" onClick={() => {props.jobModalSwitchOn(job.id)}}>{job.accepted? "Details" : "Accept"}</button> : <button onClick={() => { props.jobModalSwitchOn(job.id)}} className="job-display-button">Details</button>;

      // const index = props.user.current_user.is_shoveler? residenceIndex(job.residence_id) : props.residence_index        ----job.accepted? 
      const jobDetails = <div className="job-date-time">
        <div className="job-date-time-titles">
          <p>Booked for: </p>
          <p>To be finished by: </p>
          {adressTitle}
        </div>
        <div className="job-date-time-data">
          <h3>{dateString}</h3>
          <h3>{timeString}</h3>
          {adressInfo}
        </div>
      </div>

      const jobStatus = <div className="job-display-status">
        <p>Status:</p>
        <h2>{status}</h2>
      </div>

      const checkInBtn = job.confirmation? '' : props.user.current_user.is_shoveler? job.accepted? job.check_in? job.check_out? '' : <button onClick={() => {props.jobComplete(job.id)}}>Confirm Finished</button> : <button onClick={() => {props.checkIn(job.id)}}>Check-In</button> : <button onClick={() => {props.acceptJob(job.id)}}>Accept Job</button> : job.check_out? <button onClick={() => {props.jobConfirmation(job.id)}}>Approve</button> : ''

      const jobModalContent = <div className="job-modal">{jobDetails}{jobStatus}{checkInBtn}{job.check_in? job.check_out? props.user.current_user.is_shoveler?  <p>Awaiting customer approval...</p> : '' : <div><p>Checked In at:</p><h3>{job.check_in}</h3></div> : ''}</div>

      return(
        <div key={job.id} className="job-display">
          {jobDetails}
          {jobStatus}
          {jobButton}
          <Modal show={props.jobModal === job.id} handleClose={props.jobModalSwitchOff} children={jobModalContent} />
        </div>
      )
    });
    return jobs;
  }
  let jobListing = props.user.current_user.is_shoveler?

  <div className="job-list">

    <div className="accepted-jobs">
      <h1>Your Booked Jobs:</h1>
      {jobPost(props.bookedJobs)}
    </div>
    {jobPost(props.availableJobs).length > 0? <h1 className="alt-color">Available Jobs:</h1> : ''}
    {jobPost(props.availableJobs)}

  </div>
  :
  <div className="job-list">
  {props.jobs.length > 0? <h1 className="alt-color">Your Upcoming Jobs:</h1> : ''}
    {jobPost(props.jobs)}
  </div>;

  return (
    <div>
      {jobListing}
    </div>

  )
}
