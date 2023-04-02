import { useState, useEffect } from 'react'
import './styles.css'
import Client from './services/api'
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm'
import UpdateReview from './components/UpdateReview'
import AllProducts from './pages/AllProducts'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/User'
import Order from './pages/Order'

const App = () => {
  const [user, setUser] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [cart, setCart] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const getAllProducts = async () => {
    const response = await Client.get(`/api/products`)
    setAllProducts(response.data)
    let reviews = response.data.reviews
    setReviews(reviews)
  }

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getAllProducts()
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
            element={
              <ProductDetails
                allProducts={allProducts}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/order"
            element={<Order cart={cart} setCart={setCart} />}
          />
          <Route
            path="/form/:userId/:productId"
            element={<ReviewForm user={user} />}
          />
          <Route
            path="/form/:userId/:productId/:id"
            element={<UpdateReview user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
