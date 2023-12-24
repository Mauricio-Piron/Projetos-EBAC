import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeroPerfil from '../../components/Hero'
import Cart from '../../components/Cart'
import ProductList from '../../components/ProductList'
import { useGetProductsQuery } from '../../services/api'
import { Loading } from '../../components/RestaurantList/styles'
import { MoonLoader } from 'react-spinners'
import { cores } from '../../styles'

const Restaurants = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetProductsQuery(id!)

  if (!cardapio) {
    return (
      <Loading>
        <MoonLoader color={cores.rosa} size={'60px'} />
      </Loading>
    )
  }

  return (
    <>
      <HeroPerfil />
      <ProductList cardapio={cardapio} />
      <Footer />
      <Cart />
    </>
  )
}

export default Restaurants
