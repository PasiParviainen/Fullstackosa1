const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      
      <Content pt1={part1} pt2={part2} pt3={part3} 
      ex1={exercises1} ex2={exercises2} ex3={exercises3}/>

      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>

    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part1 pt={props.pt1} ex={props.ex1}/>

      <Part2 pt={props.pt2} ex={props.ex2}/>
        
      <Part3 pt={props.pt3} ex={props.ex3}/>
      
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const Part1 = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.pt} {props.ex}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.pt} {props.ex}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.pt} {props.ex}
      </p>
    </div>
  )
}

export default App