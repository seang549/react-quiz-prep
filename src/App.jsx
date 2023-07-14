
import {useState, useEffect} from 'react'
import Users from './components/Users'
import Loading from './components/Loading'

function App() {
  

  // Instructions:
    // 1. Use a react hook to create some state called users with an initial value of an empty Array.
    // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
    // 3. Use a hook to make the API request when the app loads. 
    // 4. Create Users and UserItem components
    // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
    // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID

    const [users, setUsers] = useState([])
    
    useEffect(() => {
      const getData = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data  = await res.json()
        setUsers(data)
      }

      getData()
    }, [])

    if(users.length === 0) return <Loading />

  return (
    <div className="container">
      {/* <h1>See instructions commented out in App.jsx!</h1> */}
      <Users users={users}/>
    </div>
  )
}

export default App
