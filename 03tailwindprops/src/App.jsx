import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userName: "Ashutosh",
    age: 19
  }

  return (
    <>
      <h1>Card</h1>
      <Card name="Ashutosh" />
      <Card name="Rosie Posie" btnText="Visit Me" />
    </>
  )
}

export default App
