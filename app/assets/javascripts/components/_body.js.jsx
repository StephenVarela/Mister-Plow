class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  handleFormSubmit(comment, price) {
    console.log('hello')
  }

  componentDidMount(){
    fetch('/api/v1/jobs.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ jobs: data }) });
  }
  render(){   
    return (
      <div>
        <AllJobs jobs={this.state.jobs} />
        <NewJob />
      </div>
    )
  }
}