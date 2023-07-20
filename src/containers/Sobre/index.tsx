import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Bem-vindo ao meu Portfólio. Eu sou Elias, Software Developer em formação,
      atualmente me dedico aos estudos em um curso de graduação de Engenharia de
      Software e estou me especializando em Desenvolvimento Full Stack Java em
      um curso livre.
    </Paragrafo>
    <br />
    <Paragrafo tipo="secundario">
      No momento, estou focado em desenvolver meu conjunto de habilidades em
      desenvolvimento front-end. Nesta fase da minha carreira, busco
      oportunidades, como estágio, vagas de Trainee, voluntariado ou projetos
      que me possibilitem melhorar as minhas habilidades e me tornar um
      profissional de alta qualidade.
    </Paragrafo>
    <br />
    <Paragrafo tipo="secundario">
      A seguir, estão os projetos que realizo nos meus cursos e graduação, os
      quais me auxiliam a melhorar minhas habilidades na área de
      desenvolvimento.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=eliassgo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eliassgo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
