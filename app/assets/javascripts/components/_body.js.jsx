class Body extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewJob = this.addNewJob.bind(this)
  }

  handleFormSubmit(comments, price) {
    console.log(comments, price);
    let body = JSON.stringify({
      job: {
        comments: comments,
        price: price,
        residence_id: 4
      }
    });
    alert(body)
    fetch('http://localhost:3000/api/v1/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
    .then((response) => {
      return response.json()
    })
    .then((job) => {
      this.addNewJob(job)
    });
  }
  addNewJob(job) {
    this.setState({
      jobs: this.state.jobs.concat(job)
    });

  }
  componentDidMount(){
    fetch('/api/v1/jobs.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ jobs: data })
    });
  }
  render(){

    return (
      <div>
        <AllJobs jobs={this.state.jobs} />
        <NewJob handleFormSubmit={this.handleFormSubmit} authenticity_token={this.props.authenticity_token} />
      </div>
    )
  }

}
