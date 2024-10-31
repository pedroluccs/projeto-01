import {
  CardGrid,
  CardDescription,
  CardTitle,
  CardText,
  CardImg,
  Card,
  CardButton,
  TitleContainer,
  Tag,
  TagContainer,
  Rating
} from './style'

import sushi from '../../assets/imagem.png'
import pasta from '../../assets/image1.png'
import starIcon from '../../assets/estrela.png'

type cardContent = {
  image: string
  title: string
  description: string
  tags: string[]
  rating: string
}

const cardContent = [
  {
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Japonesa', 'Destaque da semana'],
    rating: '4.9'
  },
  {
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    rating: '4.9'
  },
  {
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana', 'Destaque da semana'],
    rating: '4.7'
  },
  {
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana', 'Promoção'],
    rating: '4.6'
  },
  {
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    rating: '4.0'
  },
  {
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    rating: '4.1'
  }
]

const CardList = () => {
  return (
    <div className="container">
      <CardGrid>
        {cardContent.map((card, index) => (
          <Card key={index}>
            <CardImg>
              <img src={card.image} alt={card.title} />
              <TagContainer>
                {card.tags?.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagContainer>
            </CardImg>
            <CardText>
              <TitleContainer>
                <CardTitle>{card.title}</CardTitle>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Rating>
                    {card.rating}
                    <img src={starIcon} alt="" />
                  </Rating>
                </div>
              </TitleContainer>
              <CardDescription>{card.description}</CardDescription>
              <CardButton>Saiba mais</CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>
    </div>
  )
}

export default CardList
