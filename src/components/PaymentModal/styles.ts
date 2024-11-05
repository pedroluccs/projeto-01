import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalPaymentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
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
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 15px;
`
export const SideInput = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
`

export const FirstSideInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Label = styled.label`
  font-size: 14px;
  color: ${colors.beige};
  margin-bottom: 8px;
  display: block;
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  background-color: ${colors.beige};
  color: ${colors.black};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;

  &:focus {
    border-color: ${colors.black};
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;

  &:hover {
    background-color: #ffebd0;
  }

  &:first-child {
    margin-top: 20px;
  }
`

export const BackButton = styled(Button)`
  background-color: ${colors.beige};
  margin-top: 8px;

  &:hover {
    background-color: #ffebd0;
  }
`
