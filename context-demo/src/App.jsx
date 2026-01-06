import './App.css'
import Child from './components/Child'

function App() {
  const user = { name: "Aaron", role: "Admin" };
  return (
    <>
      <h1>Welcome to Context API Demo</h1>
      <Child user={user} />
    </>
  )
}

export default App
