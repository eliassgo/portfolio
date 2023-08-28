import Academicos from '../../components/Academicos'
import ProjetosOne from '../../components/ProjetosOne'
import Sidebar from '../../containers/SideBar'
import Sobre from '../../containers/Sobre'
import { Container } from '../../styles'

const Home = () => (
  <Container>
    <Sidebar />
    <main>
      <Sobre />
      <ProjetosOne />
      <Academicos />
    </main>
  </Container>
)

export default Home
