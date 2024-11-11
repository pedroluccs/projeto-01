import {
  BackgroundImg,
  ProfileHeroBar,
  RestaurantTag,
  RestaurantName,
  TextAlign,
  CartText
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
          <TextAlign>Restaurantes</TextAlign>
        </NavLinkHero>
        <NavLinkHero to="/">
          <img src={logoImage} alt="Logo" />
        </NavLinkHero>
        <CartText>
          <NavLinkHero to="#">
            {totalQuantity} produto(s) no carrinho
          </NavLinkHero>
        </CartText>
      </ProfileHeroBar>
      <BackgroundImg>
        <RestaurantTag>
          <TextAlign>Italiana</TextAlign>
        </RestaurantTag>
        <RestaurantName>
          <TextAlign>La Dolce Vita Trattoria</TextAlign>
        </RestaurantName>
      </BackgroundImg>
    </div>
  )
}

export default HeroProfile
