import Client from '../services/api'
import Search from '../components/Search'
// import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'

const Home = () => {
  // const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // useEffect(() => {
  //   const getCategory = async () => {
  //     const response = await Client.get(`${BASE_URL}/api/products/category`)
  //     setCategory(response.data.results)
  //     console.log(response.data.results)
  //   }
  //   getCategory()
  // }, [])

  useEffect(() => {
    const getProducts = async () => {
      const response = await Client.get(`/api/products`)
      console.log('HELLO')
      console.log(response.data)
      setProducts(response.data)
      // let reviews = response.data.reviews.slice(-10)
      // setReviews(reviews.reverse())
    }
    getProducts()
  }, [])

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

  return (
    <div className="nav-left">
      <div>
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        {searched ? (
          <div className="search">
            <h2>Search Results</h2>

            <section className="example">
              {searchResults.map((result) => (
                <ProductCard
                  key={result.id}
                  image={result.image}
                  name={result.name}
                  description={result.description}
                />
              ))}
            </section>
          </div>
        ) : (
          <div className="category">
            {/* <h2>Category</h2> */}
            <section className="container-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </section>
          </div>
        )}
      </div>

      <div>{/* <h1>Bella Luna Designs</h1> */}</div>
    </div>
  )
}

export default Home
