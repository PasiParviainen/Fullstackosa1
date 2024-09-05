import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="Positive"/>

      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>

      <Button handleClick={() => setBad(bad + 1)} text="Negative"/>

      <h2>Statistics</h2>

      <Feedback pos={good} neg={bad} neut={neutral} total={total}/>
      
    </div>
  )
}

function Feedback(props) {
  if (props.total != 0) {
    return <Statistics pos={props.pos} neg={props.neg} neut={props.neut} total={props.total}/>;
  }
  return <p>No feedback given yet</p>;
}

const Statistics = (props) => (
  <div>
    <table>
      <Stats type={props.pos} text="Positive"/>
      
      <Stats type={props.neut} text="Neutral"/>

      <Stats type={props.neg} text="Negative"/>

      <Stats type={props.total} text="All"/>

      <Stats type={<Average pos={props.pos} neg={props.neg} neut={props.neut} total={props.total}/>} 
      text="Average"/>

      <Stats type={<Positive pos={props.pos} total={props.total}/>} 
      text="Positive"/>

    </table>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Stats = (props) => (
  <tbody>
    <tr>
      <td>
        {props.text}:
      </td>
      <td>
        {props.type}
      </td>
    </tr>
  </tbody>
)

function Average(props) {
  const average = (props.pos + (0 - props.neg)) / props.total
  return average;
}

function Positive(props) {
  const positive = (props.pos / props.total * 100)
  return positive + "%";
}

export default App