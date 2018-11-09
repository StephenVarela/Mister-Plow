const AllJobs = (props) => {
  var jobs = props.jobs.map((job) => {
    return(
      <div key={job.id} className="job-display">
        <h3>{job.comments}</h3>
        <p>Job Price: ${job.price}</p>
      </div>
    )
  });

  return (
    <div className="job-list">
      {jobs}
    </div>
  )
}
