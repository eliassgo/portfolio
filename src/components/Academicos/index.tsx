import {
  Academico,
  Academico2,
  Academico3,
  Academico4
} from '../ProjetoAcademico/Index'
import { Divisor, Lista, Titulos } from '../Projetos/styles'
import Title from '../Title'

const Academicos = () => (
  <>
    <Titulos>
      <Title fontSize={16} marginBottom={10}>
        Projetos Acadêmicos
      </Title>
      <Divisor />
    </Titulos>
    <Lista>
      <li>
        <Academico />
      </li>
      <li>
        <Academico2 />
      </li>
      <li>
        <Academico3 />
      </li>
      <li>
        <Academico4 />
      </li>
    </Lista>
  </>
)

export default Academicos
