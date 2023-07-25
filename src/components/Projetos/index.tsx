import {
  Projeto,
  Projeto2,
  Projeto3,
  Projeto4,
  Projeto5,
  Projeto6,
  Projeto7,
  Projeto8,
  Projeto9,
  Projeto10,
  Projeto11,
  Projeto12,
  Projeto13,
  Projeto14
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
      <li>
        <Projeto7 />
      </li>
      <li>
        <Projeto8 />
      </li>
      <li>
        <Projeto9 />
      </li>
      <li>
        <Projeto10 />
      </li>
      <li>
        <Projeto11 />
      </li>
      <li>
        <Projeto12 />
      </li>
      <li>
        <Projeto13 />
      </li>
      <li>
        <Projeto14 />
      </li>
    </Lista>
  </section>
)

export default Projetos
