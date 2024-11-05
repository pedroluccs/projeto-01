import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalAddressOverlay = styled.div`
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
  width: 400px;
  height: 100%;
  background-color: ${colors.red};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.8);
  padding: 20px;
  overflow-y: auto;

  h2 {
    color: ${colors.beige};
  }
`

export const FormGroup = styled.div`
  margin-bottom: 15px;
`
export const NumberForm = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
`

export const Label = styled.label`
  font-size: 14px;
  color: ${colors.beige};
  margin-bottom: 5px;
  display: block;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  background-color: ${colors.beige};

  &:focus {
    border-color: #007bff;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ffebd0;
  }

  &:first-child {
    margin-top: 20px;
  }
`

export const BackButton = styled(Button)`
  background-color: ${colors.beige};
  margin-top: 5px;

  &:hover {
    background-color: #ffebd0;
  }
`
