import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import { Loading } from '../../components/RestaurantList/styles'

import { useGetRestaurantsQuery } from '../../services/api'
import { MoonLoader } from 'react-spinners'
import { cores } from '../../styles'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return (
      <Loading>
        <MoonLoader color={cores.rosa} size={'60px'} />
      </Loading>
    )
  }

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
      <Cart />
    </>
  )
}

export default Home
