import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage from '../../assets/fundo.png'
import backgroundImage2 from '../../assets/fundo-parte-2.png'
import { colors } from '../../styles'

export const ProfileHeroBar = styled.div`
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 186px;
  place-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    width: 100%;
    height: 160px;
  }
`

export const BackgroundImg = styled.div`
  background-image: url(${backgroundImage2});
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 20px;
  color: ${colors.white};

  @media (max-width: 1024px) {
    width: 100%;
    height: 150px;
    bottom: 10px;
  }
`

export const NavLinkHero = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;

  img {
    left: 100vh;
    bottom: 8vh;
    position: absolute;
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;

    img {
      left: 18vh;
    }
  }
`
export const RestaurantTag = styled.div`
  position: absolute;
  top: 10px;
  font-size: 32px;
  font-weight: 100;

  p {
    color: ${colors.white};
  }

  @media (max-width: 1024px) {
    font-size: 15px;
    left: 9vh;
  }
`
export const RestaurantName = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 32px;
  font-weight: 900;

  p {
    color: ${colors.white};
  }

  @media (max-width: 1024px) {
    font-size: 15px;
    left: 3vh;
  }
`
export const TextAlign = styled.p`
  position: relative;
  left: 440px;

  @media (max-width: 1024px) {
    left: 14vh;
  }
`
export const CartText = styled.p`
  position: relative;
  right: 440px;

  @media (max-width: 1024px) {
    display: flex;
    left: 16vh;
  }
`
