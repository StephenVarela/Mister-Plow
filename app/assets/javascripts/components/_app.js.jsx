const App = (props) => {
  return(
    <div>
      <h1>Hello World</h1>
      <Body authenticity_token={props.authenticity_token}/>
    </div>
  )
}