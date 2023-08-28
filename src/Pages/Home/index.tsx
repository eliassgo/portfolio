import Academicos from '../../components/Academicos'
import ProjetosOne from '../../components/ProjetosOne'
import Sidebar from '../../containers/SideBar'
import Sobre from '../../containers/Sobre'

const Home = () => (
  <>
    <Sidebar />
    <main>
      <Sobre />
      <ProjetosOne />
      <Academicos />
    </main>
  </>
)

export default Home
