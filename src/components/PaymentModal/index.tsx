import { useEffect } from 'react'
import React from 'react'
import {
  BackButton,
  ModalContent,
  Button,
  FormGroup,
  Input,
  Label,
  ModalPaymentOverlay,
  SideInput,
  FirstSideInput
} from './styles'

type PaymentModalProps = {
  total: string
  onClose: () => void
  onBackToAddress: () => void
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  total,
  onClose,
  onBackToAddress
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <ModalPaymentOverlay>
      <ModalContent>
        <h2>Pagamento - Valor a pagar R$ {total}</h2>
        <form>
          <FormGroup>
            <Label>Nome no cartão</Label>
            <Input type="text" required />
          </FormGroup>
          <FirstSideInput>
            <FormGroup style={{ width: '65%' }}>
              <Label>Número do cartão</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup style={{ width: '20%' }}>
              <Label>CVV</Label>
              <Input type="text" required />
            </FormGroup>
          </FirstSideInput>
          <SideInput>
            <FormGroup>
              <Label>Mês de vencimento</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Ano de vencimento</Label>
              <Input type="text" required />
            </FormGroup>
          </SideInput>
          <Button>Finalizar pagamento</Button>
          <BackButton onClick={onBackToAddress}>
            Voltar para edição de endereço
          </BackButton>
        </form>
      </ModalContent>
    </ModalPaymentOverlay>
  )
}

export default PaymentModal