import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarrraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarrraLateral mostrarFiltro />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
