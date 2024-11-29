import styled from 'styled-components'
import { colors } from '../../styles'

export const DoneOrderModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100vh;
  background-color: ${colors.red};
  padding: 20px;
  overflow-y: auto;

  h2 {
    color: ${colors.beige};
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const OrderComplete = styled.p`
  color: ${colors.beige};
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: #ffebd0;
  }

  &:first-child {
    margin-top: 20px;
  }
`
