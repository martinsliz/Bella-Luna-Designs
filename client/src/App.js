import { useState, useEffect } from 'react'
// import Axios from 'axios'
import './App.css'
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm'
import Home from './pages/Home'
import About from './pages/About'
// import Client from './services/api'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/User'

const App = () => {
  const [user, setUser] = useState(null)

  // const handleLogOut = () => {
  //   setUser(null)
  //   localStorage.clear()
  // }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  // const [account, setAccount] = useState({})

  // useEffect(() => {
  //   if (user) {
  //     const handleAccount = async () => {
  //       const data = await Client.get(`/api/users/info/${user.id}`)
  //       setAccount(data.data)
  //     }
  //     handleAccount()
  //   }
  // }, [user, setAccount])

  return (
    <div className="App">
      <NavBar />
      {/* <Nav user={user} handleLogOut={handleLogOut} /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/form/:userId/:classId"
            element={<ReviewForm user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
