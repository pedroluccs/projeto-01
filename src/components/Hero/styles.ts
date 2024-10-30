import styled from 'styled-components'
import backgroundImage from '../../assets/fundo.png'

export const HeroBar = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 384px;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-top: 40px;
  margin-bottom: 30px;
`

export const SubLogo = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-top: 170px;
`