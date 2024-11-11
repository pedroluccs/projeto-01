import Hero from '../../components/Hero'
import CardList from '../../components/Restaurants'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data = await response.json()
      setRestaurants(data)
    }

    fetchRestaurants()
  }, [])

  return (
    <>
      <Hero />
      <CardList restaurants={restaurants} />
    </>
  )
}

export default Home
