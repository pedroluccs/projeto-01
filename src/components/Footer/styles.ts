import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  text-align: center;
  padding-bottom: 40px;
  margin-top: 50px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 70px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`
export const Copyright = styled.p`
  font-size: 10px;
  line-height: 12px;
  weight: 480px;
`
