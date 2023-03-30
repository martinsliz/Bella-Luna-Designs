import { useState, useEffect } from 'react'
import './App.css'
import Client from './services/api'
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm'
import AllProducts from './pages/AllProducts'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/User'

const App = () => {
  const [user, setUser] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [reviews, setReviews] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const getAllProducts = async () => {
    const response = await Client.get(`/api/products`)
    console.log(response.data)
    setAllProducts(response.data)
    let reviews = response.data.reviews
    setReviews(reviews)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    // getProducts()
  }, [])

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/allProducts"
            element={
              <AllProducts
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails allProducts={allProducts} />}
          />
          <Route
            path="/form/:userId/:productId"
            element={<ReviewForm user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
