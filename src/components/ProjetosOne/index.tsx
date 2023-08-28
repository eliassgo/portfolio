import { Projeto, Projeto2 } from '../Projeto'
import { Button, Divisor, Lista, Titulos } from '../Projetos/styles'
import Title from '../Title'
import { Section } from './styles'

const ProjetosOne = () => (
  <Section>
    <Titulos>
      <Title fontSize={16} marginBottom={5}>
        Projetos
      </Title>
      <Divisor />
      <Button to="/novo">View All</Button>
    </Titulos>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto2 />
      </li>
    </Lista>
  </Section>
)

export default ProjetosOne
