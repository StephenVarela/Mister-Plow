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

      const status = props.user.current_user.is_shoveler? job.accepted && job.shoveler_id === props.user.shoveler.id? "Accepted" : 'Available' : job.accepted? 'Confirmed' : 'Pending...';
      const adressTitle = props.user.current_user.is_shoveler? <p>Adress info:</p> : ''
      const adressInfo = props.user.current_user.is_shoveler && props.residences[residenceIndex(job.residence_id)]? <a src="/" className="address-link"><h3>{props.residences[residenceIndex(job.residence_id)].street_name}</h3></a> : ''
      const jobButton = props.user.current_user.is_shoveler? <button className="job-accept-button" onClick={() => { job.accepted? props.jobDetails() : props.acceptJob(job.id) }}>{job.accepted? "Details" : "Accept"}</button> : <button className="job-display-button">Update</button>;
      
      return(
        <div key={job.id} className="job-display">
  
          <div className="job-date-time">
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
  
          <div className="job-display-status">
            <p>Status:</p>
            <h2>{status}</h2>
          </div>
  
          {jobButton}
  
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
    {jobPost(props.availableJobs).length > 0? <h1>Available Jobs:</h1> : ''}
    {jobPost(props.availableJobs)}

  </div>
  :
  <div className="job-list">
  {props.jobs.length > 0? <h1>Your Upcoming Jobs:</h1> : ''}
    {jobPost(props.jobs)}
  </div>;

  return (
    jobListing
  )
}
