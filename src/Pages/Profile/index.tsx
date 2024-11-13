import { useState, useEffect } from 'react'
import FoodCardList from '../../components/Food/Italian'
import HeroProfile from '../../components/HeroProfile'
import { useParams } from 'react-router-dom'

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

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) =>
        console.error('Erro ao carregar dados do restaurante', error)
      )
  }, [id])
  return (
    <>
      {menuData && (
        <HeroProfile tipo={menuData.tipo} titulo={menuData.titulo} />
      )}
      <FoodCardList menuData={menuData?.cardapio || []} />
    </>
  )
}

export default Profile
