import { useEffect, useState } from 'react'
import React from 'react'
import {
  ModalContent,
  FormGroup,
  Label,
  Input,
  Button,
  BackButton,
  ModalAddressOverlay,
  NumberForm
} from './styles'

type AddressModalProps = {
  onClose: () => void
  onContinueToPayment: () => void
  onBackToCart: () => void
}

const AddressModal: React.FC<AddressModalProps> = ({
  onClose,
  onContinueToPayment,
  onBackToCart
}) => {
  const [formData, setFormData] = useState({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })
  const [formError, setFormError] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.receiver ||
      !formData.address ||
      !formData.city ||
      !formData.cep ||
      !formData.number
    ) {
      setFormError('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setFormError('')
    onContinueToPayment()
  }

  return (
    <ModalAddressOverlay>
      <ModalContent>
        <h2>Entrega</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Quem irá receber</Label>
            <Input
              type="text"
              name="receiver"
              value={formData.receiver}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Endereço</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Cidade</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <NumberForm>
            <FormGroup>
              <Label>CEP</Label>
              <Input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Número</Label>
              <Input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </NumberForm>
          <FormGroup>
            <Label>Complemento (opcional)</Label>
            <Input
              type="text"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
            />
          </FormGroup>

          {formError && <p style={{ color: 'red' }}>{formError}</p>}

          <Button type="submit">Continuar com o pagamento</Button>
          <BackButton onClick={onBackToCart}>Voltar ao carrinho</BackButton>
        </form>
      </ModalContent>
    </ModalAddressOverlay>
  )
}

export default AddressModal
