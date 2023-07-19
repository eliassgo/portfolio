import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import Socials from '../../components/Socials'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Elias Gomes</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        eliassgo
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
      <Socials></Socials>
    </SideBarContainer>
  </aside>
)

export default Sidebar
