import { useEffect, useState } from 'react'
import React from 'react'
import {
  Button,
  DoneOrderModalOverlay,
  ModalContent,
  OrderComplete
} from './style'

type DoneOrderModalProps = {
  onClose: () => void
  onDoneOrder: () => void
}

const DoneOrderModal: React.FC<DoneOrderModalProps> = ({
  onDoneOrder,
  onClose
}) => {
  const [orderId, setOrderId] = useState<string>('')

  useEffect(() => {
    const generatedOrderId = `ORDER ${Date.now()}`
    setOrderId(generatedOrderId)

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <DoneOrderModalOverlay>
      <ModalContent>
        <h2>Pedido realizado - {orderId}</h2>
        <OrderComplete>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </OrderComplete>
        <OrderComplete>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </OrderComplete>
        <OrderComplete>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </OrderComplete>
        <OrderComplete>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </OrderComplete>
        <Button onClick={onDoneOrder}>Concluir</Button>
      </ModalContent>
    </DoneOrderModalOverlay>
  )
}

export default DoneOrderModal
