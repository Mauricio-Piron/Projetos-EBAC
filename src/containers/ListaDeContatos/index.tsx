import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contatos from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles/index'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosfiltrados = itens
    if (termo !== undefined) {
      contatosfiltrados = contatosfiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (criterio === 'social') {
        contatosfiltrados = contatosfiltrados.filter(
          (item) => item.social === valor
        )
      }
      return contatosfiltrados
    } else {
      return itens
    }
  }
  const contatos = filtraContatos()

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `Exibindo ${quantidade} contato(s), da categoria: todas ${complementacao}`
    } else {
      mensagem = `Exibindo ${quantidade} contato(s), da categoria: ${complementacao}`
    }
    return mensagem
  }

  const mensagem = exibeResultadoFiltragem(contatos.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contatos
              id={c.id}
              email={c.email}
              telefone={c.telefone}
              nome={c.nome}
              tipoTel={c.tipoTel}
              social={c.social}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
