const AllJobs = (props) => {
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let jobs = props.jobs.map((job) => {
    const dateTime = new Date(job.scheduled_time)
    const dateString = monthNames[dateTime.getMonth()] + ' ' + dateTime.getDate();
    const timeString = (dateTime.getHours() === 0 ? 12 : dateTime.getHours() % 12 === 0 ? 12 : dateTime.getHours() % 12) + ':' + pad(dateTime.getMinutes()) + (dateTime.getHours() > 11 ? ' PM' : ' AM');
    return(
      <div key={job.id} className="job-display">
        <div className="job-date-time">

          <div className="job-date-time-titles">
            <p>Booked for: </p>
            <p>To be finished by: </p>
          </div>

          <div className="job-date-time-data">
            <h3>{dateString}</h3>
            <h3>{timeString}</h3>
          </div>

        </div>

        <div className="job-display-status">
          <p>Status:</p>
          <h2>Pending...</h2>
        </div>

        <button className="job-display-buttons">Update</button>

      </div>
    )
  });

  return (
    <div className="job-list">
      {jobs}
    </div>
  )
}
