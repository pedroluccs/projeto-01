import {
  BackgroundImg,
  ProfileHeroBar,
  RestaurantTag,
  RestaurantName
} from './styles'
import logoImage from '../../assets/logo.png'
import { NavLinkHero } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const HeroProfile = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  )

  return (
    <div className="header">
      <ProfileHeroBar>
        <NavLinkHero to="/">
          <p>Restaurantes</p>
        </NavLinkHero>
        <NavLinkHero to="/">
          <img src={logoImage} alt="" />
        </NavLinkHero>
        <NavLinkHero to="#">
          <p>{totalQuantity} produto(s) no carrinho</p>
        </NavLinkHero>
      </ProfileHeroBar>
      <BackgroundImg>
        <RestaurantTag>Italiana</RestaurantTag>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </BackgroundImg>
    </div>
  )
}

export default HeroProfile
