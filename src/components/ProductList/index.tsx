import ProductCard from '../Product'

import { ListContainer, ProductContainer } from './styles'

import { getDescription } from '../Restaurant'
import { Menu } from '../RestaurantList'

type Props = {
  cardapio: Menu[]
}

const ProductList = ({ cardapio }: Props) => {
  return (
    <>
      <ProductContainer>
        <ListContainer>
          {cardapio.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              descricao={getDescription(item.descricao, 150) as string}
              preco={item.preco}
              porcao={item.porcao}
              cardapio={item}
            />
          ))}
        </ListContainer>
      </ProductContainer>
    </>
  )
}

export default ProductList
