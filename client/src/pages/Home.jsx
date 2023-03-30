import Client from '../services/api'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../components/Search'
// import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'

const Home = () => {
  let navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [mainPhoto, setMainPhoto] = useState({})
  const [reviews, setReviews] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await Client.get(`/api/products/${searchQuery}`)
    console.log('SEARCH')
    console.log(response)
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const getProducts = async () => {
    const response = await Client.get(`/api/products`)
    console.log(response.data)
    setProducts(response.data)
    let coverPhoto =
      response.data[Math.floor(Math.random() * response.data.length)]
    setMainPhoto(coverPhoto)
    let reviews = response.data.reviews
    setReviews(reviews)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Search
        onSubmit={getSearchResults}
        onChange={handleChange}
        value={searchQuery}
      />
      {searched ? (
        <div className="search">
          <h2>Search Results</h2>

          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <Link to={`/productDetails/${result.id}`} key={result.id}>
                <div>
                  <img alt="" src={result.image} />
                  <h3>{result.name}</h3>
                  <p>${result.price}</p>
                  <p>{result.description}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      ) : (
        <section className="container-grid">
          <Link to="/allProducts">
            <img className="coverImage" src={mainPhoto.image} alt="Cover" />
          </Link>
          <button onClick={() => navigate('/allProducts')}>
            SHOP BELLA LUNA
          </button>
        </section>
      )}
    </div>
  )
}

export default Home
