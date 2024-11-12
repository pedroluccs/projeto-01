import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage2 from '../../assets/fundo-parte-2.png'
import { colors } from '../../styles'

export const HeroProfileBar = styled.div`
  h1 {
    display: none;
  }

  .container {
    position: relative;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
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
  bottom: 300px;
  color: ${colors.white};

  @media (max-width: 1024px) {
    width: 100%;
    height: 140px;
    bottom: 30vh;
  }

  @media (max-width: 1366px) {
    bottom: 15vh;
  }

  @media (max-width: 932px) {
    bottom: 22vh;
  }
`

export const NavLinkHeroRight = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: 350px;
  z-index: 1;

  @media (max-width: 1024px) {
    position: relative;
    bottom: 220px;
  }
`
export const NavLinkHeroLeft = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  left: 0;
  bottom: 350px;
  z-index: 1;

  @media (max-width: 1024px) {
    position: relative;
    bottom: 230px;
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
    margin-left: 4px;
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
    margin-left: 4px;
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
