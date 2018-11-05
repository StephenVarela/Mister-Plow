const AllJobs = (props) => {
  var jobs = props.jobs.map((job) => {
    return(
      <div key={job.id}>
        <h3>{job.comments}</h3>
        <p>Job Price: ${job.job_price}</p>
      </div>
    )
  });
  
  return (
    <div>
      {jobs}
    </div>  
  )
}