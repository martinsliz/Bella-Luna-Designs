import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [cart, setCart] = useState([])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

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
        <NavBar user={user} handleLogOut={handleLogOut} />
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
            path="/uform/:productId/:reviewId"
            element={
              <UpdateReview
                user={user}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
