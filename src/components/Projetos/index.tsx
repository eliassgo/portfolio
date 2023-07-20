import {
  Projeto,
  Projeto2,
  Projeto3,
  Projeto4,
  Projeto5,
  Projeto6
} from '../Projeto'
import Title from '../Title'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto2 />
      </li>
      <li>
        <Projeto3 />
      </li>
      <li>
        <Projeto4 />
      </li>
      <li>
        <Projeto5 />
      </li>
      <li>
        <Projeto6 />
      </li>
    </Lista>
  </section>
)

export default Projetos
