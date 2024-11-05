import { useEffect } from 'react'
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
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <ModalAddressOverlay>
      <ModalContent>
        <h2>Entrega</h2>
        <form>
          <FormGroup>
            <Label>Quem irá receber</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Endereço</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Cidade</Label>
            <Input type="text" required />
          </FormGroup>
          <NumberForm>
            <FormGroup>
              <Label>CEP</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Número</Label>
              <Input type="text" required />
            </FormGroup>
          </NumberForm>
          <FormGroup>
            <Label>Complemento(opcional)</Label>
            <Input type="text" required />
          </FormGroup>
          {/* Outros campos de endereço */}

          <Button onClick={onContinueToPayment}>
            Continuar com o pagamento
          </Button>
          <BackButton onClick={onBackToCart}>Voltar ao carrinho</BackButton>
        </form>
      </ModalContent>
    </ModalAddressOverlay>
  )
}

export default AddressModal
