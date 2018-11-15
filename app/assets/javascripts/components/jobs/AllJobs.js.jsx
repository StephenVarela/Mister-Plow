const AllJobs = (props) => {
  const jobListing = props.user.current_user.is_shoveler?
    
    <div className="job-list">
      <div className="accepted-jobs">
        {props.bookedJobs.length > 0? <h1>Your Booked Jobs:</h1> : ''}
        <JobPosts jobs={props.bookedJobs} shoveler_id={props.user.shoveler.id} is_shoveler={props.user.current_user.is_shoveler} residences={props.residences} residenceIndex={props.residenceIndex} jobModalSwitchOn={props.jobModalSwitchOn} jobModalSwitchOff={props.jobModalSwitchOff} jobModal={props.jobModal} dateString={props.dateString} timeString={props.timeString} jobComplete={props.jobComplete} checkIn={props.checkIn} acceptJob={props.acceptJob} jobConfirmation={props.jobConfirmation}/>
      </div>
      {props.availableJobs.length > 0? <h1>Available Jobs:</h1> : ''}
      <JobPosts jobs={props.availableJobs} shoveler_id={props.user.shoveler.id} is_shoveler={props.user.current_user.is_shoveler} residences={props.residences} residenceIndex={props.residenceIndex} jobModalSwitchOn={props.jobModalSwitchOn} jobModalSwitchOff={props.jobModalSwitchOff} jobModal={props.jobModal} dateString={props.dateString} timeString={props.timeString} jobComplete={props.jobComplete} checkIn={props.checkIn} acceptJob={props.acceptJob} jobConfirmation={props.jobConfirmation}/>
    </div>

    :
    
    <div className="job-list">
    {props.jobs.length > 0? <h1>Your Upcoming Jobs:</h1> : ''}
      <JobPosts jobs={props.jobs} is_shoveler={props.user.current_user.is_shoveler} residences={props.residences} residenceIndex={props.residenceIndex} jobModalSwitchOn={props.jobModalSwitchOn} jobModalSwitchOff={props.jobModalSwitchOff} jobModal={props.jobModal} dateString={props.dateString} timeString={props.timeString} jobComplete={props.jobComplete} checkIn={props.checkIn} acceptJob={props.acceptJob} jobConfirmation={props.jobConfirmation}/>
    </div>;

    const completedJob = <JobPosts jobs={props.completedJobs} shoveler_id={props.is_shoveler? props.user.shoveler.id : null} is_shoveler={props.user.current_user.is_shoveler} residences={props.residences} residenceIndex={props.residenceIndex} jobModalSwitchOn={props.jobModalSwitchOn} jobModalSwitchOff={props.jobModalSwitchOff} jobModal={props.jobModal} dateString={props.dateString} timeString={props.timeString} jobComplete={props.jobComplete} checkIn={props.checkIn} acceptJob={props.acceptJob} jobConfirmation={props.jobConfirmation}/>


  return (
    <div>
      {jobListing}      
      <Modal type="modal-main list" show={props.completedJobsModal} handleClose={props.showCompletedJobs} children={completedJob} />
    </div>

  )
}
