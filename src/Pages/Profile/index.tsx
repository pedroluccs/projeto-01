import FoodCardList from '../../components/Food/Italian'
import HeroProfile from '../../components/HeroProfile'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()

  return (
    <>
      <HeroProfile />
      <FoodCardList />
    </>
  )
}

export default Profile
