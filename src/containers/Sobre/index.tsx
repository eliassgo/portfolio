import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={28}>Hi, eu sou Elias,</Title>
    <Paragrafo tipo="principal" fontSize={20}>
      estudante de Engenharia de Software e front-end developer
    </Paragrafo>
    <br />
    <Paragrafo tipo="secundario" fontSize={16}>
      Profissional com carreira em evolução na área de Desenvolvimento
      Front-End, graduando em Engenharia de software. Atualmente, busco ganhar
      os principais conhecimentos para iniciar minha carreira.
    </Paragrafo>
    <GithubSecao>
      <div>
        <img src="https://github-readme-stats.vercel.app/api?username=eliassgo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      </div>
      <div>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eliassgo&layout=compact&langs_count=7&theme=dracula" />
      </div>
    </GithubSecao>
  </section>
)

export default Sobre
