import { useState, useEffect } from 'react'
import FoodCardList from '../../components/Food/Italian'
import HeroProfile from '../../components/HeroProfile'
import { useParams } from 'react-router-dom'
import CartModal from '../../components/CartModal'

interface CardContent {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: any[]
}

const Profile = () => {
  const { id } = useParams()
  const [menuData, setMenuData] = useState<CardContent | null>(null)
  const [showCartModal, setShowCartModal] = useState(false)

  const handleOpenCartModal = () => setShowCartModal(true)
  const handleCloseCartModal = () => setShowCartModal(false)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) =>
        console.error('Erro ao carregar dados do restaurante', error)
      )
  }, [id])
  return (
    <div>
      {menuData && (
        <HeroProfile
          tipo={menuData.tipo}
          titulo={menuData.titulo}
          onOpenCart={handleOpenCartModal}
        />
      )}
      <FoodCardList menuData={menuData?.cardapio || []} />
      {showCartModal && (
        <CartModal
          onClose={handleCloseCartModal}
          onContinueToDelivery={() => console.log('Continue to delivery')}
        />
      )}
    </div>
  )
}

export default Profile
