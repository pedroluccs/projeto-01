import styled from 'styled-components'
import { colors } from '../../styles'
import { ModalOverlay } from '../Modal/style'

export const CartModalOverlay = styled(ModalOverlay)`
  justify-content: flex-end;
`

export const CartModalContent = styled.div`
  background: ${colors.red};
  height: 100vh;
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 35px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const CartItem = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: ${colors.beige};
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 2px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px;
`

export const CartText = styled.div`
  h3 {
    margin-left: 10px;
  }

  p {
    color: ${colors.red};
    margin: 10px;
  }
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  top: 30px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
  }
`

export const TotalPrice = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 700;

  span {
    color: ${colors.beige};
  }
`
