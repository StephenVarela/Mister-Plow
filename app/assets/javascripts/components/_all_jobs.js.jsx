class AllJobs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/jobs.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ jobs: data }) });
  }
  render(){
    console.log(this.state.jobs)
    var jobs = this.state.jobs.map((job) => {
      return(
        <div key={job.id}>
       <h1>{job.comments}</h1>
       <p>{job.job_price}</p>
      </div>
     )
    })
    return(
     <div>
      {jobs}
     </div>
    )
  }
}