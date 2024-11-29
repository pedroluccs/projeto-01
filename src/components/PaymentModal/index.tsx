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
  onFinishPayment: (paymentData: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }) => void
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  total,

  onBackToAddress,
  onFinishPayment
}) => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    number: '',
    code: '',
    expires: {
      month: '',
      year: ''
    }
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const paymentDataFormatted = {
      card: {
        name: paymentData.name,
        number: paymentData.number,
        code: parseInt(paymentData.code, 10),
        expires: {
          month: parseInt(paymentData.expires.month, 10),
          year: parseInt(paymentData.expires.year, 10)
        }
      }
    }

    onFinishPayment(paymentDataFormatted)
  }

  return (
    <ModalPaymentOverlay>
      <ModalContent>
        <h2>Pagamento - Valor a pagar R$ {total}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome no cartão</Label>
            <Input
              type="text"
              name="name"
              value={paymentData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FirstSideInput>
            <FormGroup style={{ width: '65%' }}>
              <Label>Número do cartão</Label>
              <Input
                type="text"
                name="number"
                value={paymentData.number}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup style={{ width: '20%' }}>
              <Label>CVV</Label>
              <Input
                type="text"
                name="code"
                value={paymentData.code}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FirstSideInput>
          <SideInput>
            <FormGroup>
              <Label>Mês de vencimento</Label>
              <Input
                type="text"
                name="month"
                value={paymentData.expires.month}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expires: { ...paymentData.expires, month: e.target.value }
                  })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Ano de vencimento</Label>
              <Input
                type="text"
                name="year"
                value={paymentData.expires.year}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expires: { ...paymentData.expires, year: e.target.value }
                  })
                }
                required
              />
            </FormGroup>
          </SideInput>
          <Button type="submit">Finalizar pagamento</Button>
          <BackButton onClick={onBackToAddress}>
            Voltar para edição de endereço
          </BackButton>
        </form>
      </ModalContent>
    </ModalPaymentOverlay>
  )
}

export default PaymentModal
