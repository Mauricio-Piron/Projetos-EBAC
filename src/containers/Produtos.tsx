import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { Produto as ProdutoType } from '../App'

import Produto from '../components/Produto'
import * as S from './styles'

import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdDosFavoritos = favoritos.map((f) => f.id)

    return IdDosFavoritos.includes(produtoId)
  }

  if (isLoading) {
    return <h2>Carregando...</h2>
  } else {
    return (
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    )
  }
}

export default ProdutosComponent
