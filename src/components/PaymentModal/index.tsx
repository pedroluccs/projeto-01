import { useEffect, useState } from 'react'
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
  onFinishPayment: () => void
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  total,
  onClose,
  onBackToAddress,
  onFinishPayment
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const [orderNumber, setOrderNumber] = useState<number | null>(null)

  const handleFinalizePayment = () => {
    // Gerar um número de pedido (pode ser alterado conforme necessário)
    const generatedOrderNumber = Math.floor(Math.random() * 100000) // Exemplo de número aleatório
    setOrderNumber(generatedOrderNumber)
    openOrderConfirmationModal(generatedOrderNumber)
  }

  const openOrderConfirmationModal = (number: number) => {
    // Aqui você deve implementar a lógica para abrir o modal de confirmação do pedido
    // Você pode usar um estado para controlar a visibilidade do modal
    console.log(`Pedido ${number} realizado com sucesso!`)
  }

  return (
    <ModalPaymentOverlay>
      <ModalContent>
        <h2>Pagamento - Valor a pagar R$ {total}</h2>
        <form>
          <FormGroup>
            <Label>Nome no cartão</Label>
            <Input type="number" required />
          </FormGroup>
          <FirstSideInput>
            <FormGroup style={{ width: '65%' }}>
              <Label>Número do cartão</Label>
              <Input type="number" required />
            </FormGroup>
            <FormGroup style={{ width: '20%' }}>
              <Label>CVV</Label>
              <Input type="number" required />
            </FormGroup>
          </FirstSideInput>
          <SideInput>
            <FormGroup>
              <Label>Mês de vencimento</Label>
              <Input type="number" required />
            </FormGroup>
            <FormGroup>
              <Label>Ano de vencimento</Label>
              <Input type="number" required />
            </FormGroup>
          </SideInput>
          <Button onClick={onFinishPayment}>Finalizar pagamento</Button>
          <BackButton onClick={onBackToAddress}>
            Voltar para edição de endereço
          </BackButton>
        </form>
      </ModalContent>
    </ModalPaymentOverlay>
  )
}

export default PaymentModal
