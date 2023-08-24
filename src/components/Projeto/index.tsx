import Title from '../Title'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './style'

export const Projeto = () => (
  <Card>
    <Title>Projeto Calculadora de IMC com ReactJs</Title>
    <Paragrafo tipo="secundario">
      Com os dados fornecidos pelo usuário, coletamos os valores de altura e
      peso e os enviamos para as respectivas constantes. Em seguida, utilizamos
      a função useState para atualizá-los automaticamente. Realizamos uma
      verificação do tipo de dado e, então, acionamos a função calculaIMC para
      retornar o IMC, classificação, Grau de obesidade e, ainda, alterar a cor
      correspondente à faixa de IMC em que o usuário se encontra na tabela
      geral.
    </Paragrafo>
    <LinkBotao
      href="https://calculadora-de-imc-khaki.vercel.app/"
      target="_blank"
    >
      Visualizar Projeto
    </LinkBotao>
  </Card>
)

export const Projeto2 = () => (
  <Card>
    <Title>Projeto Calculadora com Vue 3</Title>
    <Paragrafo tipo="secundario">
      Calculadora Aritmética com Vue. Os números escritos nos campos de input
      são coletados e inseridos em um array de objetos com estado reativo. Ao
      selecionar a operação desejada no campo de seleção, uma arrow function
      para realizar a operação é acionada, permitindo que o cálculo seja
      realizado automaticamente, sem a necessidade de apertar qualquer botão.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/calculadora_vuejs.git"
      target="_blank"
    >
      Visualizar Projeto
    </LinkBotao>
  </Card>
)
export const Projeto3 = () => (
  <Card>
    <Title>Projeto To Do com VueJs</Title>
    <Paragrafo tipo="secundario">
      Este projeto consiste em uma aplicação To-Do list (lista de afazeres)
      criada usando o framework Vue.js. O código importa três componentes Vue:
      Cabecalho, Formulario, e ListaDeTarefas. O componente define três funções:
      getTarefasPendentes, getTarefasFinalizadas e getTarefasFiltradas. Elas são
      usadas para filtrar as tarefas com base no estado de finalização e no
      filtro selecionado. As tarefas pendentes são aquelas que ainda não foram
      concluídas, e as finalizadas são aquelas que já foram concluídas. A função
      getTarefasFiltradas retorna a lista de tarefas com base no filtro atual,
      que pode ser todas, pendentes ou finalizadas.
    </Paragrafo>
    <LinkBotao href="https://github.com/eliassgo/Todo_Vue.git" target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto4 = () => (
  <Card>
    <Title>Projeto GitHub Perfil com React</Title>
    <Paragrafo tipo="secundario">
      Este projeto consiste em uma aplicação web que busca os repositórios de um
      usuário do GitHub e exibe o perfil e a lista de repositórios encontrados.
      O projeto utiliza React como biblioteca para a construção da interface do
      usuário.A estrutura do projeto é dividida em três componentes principais:
      App, Perfil, e ReposList.O componente utiliza também o hook useEffect para
      fazer uma requisição à API do GitHub para obter os repositórios do usuário
      quando há uma mudança no nome de usuário (prop nomeUsuario).
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/github_perfil.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto5 = () => (
  <Card>
    <Title>JavaScript: Validando formulários</Title>
    <Paragrafo tipo="secundario">
      Formulário de criação de contas para o banco virtual MoniBank. Tecnologias
      utilizadas durante o curso: JavaScript. Tecnologias utilizadas no projeto:
      HTML CSS
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/calculadora_de_imc.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto6 = () => (
  <Card>
    <Title>JavaScript: Jogo de Adivinhação por Voz</Title>
    <Paragrafo tipo="secundario">
      Este é um projeto de um jogo em que o usuário tenta adivinhar um número
      utilizando sua voz. O jogo possui uma interface simples em HTML,
      estilizada com CSS, e utiliza JavaScript para implementar a funcionalidade
      de reconhecimento de voz, sorteio do número e validação dos palpites.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/secret_number.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto7 = () => (
  <Card>
    <Title>JavaScript e LocalStorage: Mochila de Viagem</Title>
    <Paragrafo tipo="secundario">
      Um aplicativo simples de mochila de viagem onde os usuários podem
      adicionar, atualizar e excluir itens da lista da mochila. Os itens são
      armazenados em localStorage para persistência dos dados.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/viagem_mochila.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto8 = () => (
  <Card>
    <Title>Birthday Landing Page com JavaScript e Animate On Scroll</Title>
    <Paragrafo tipo="secundario">
      Este projeto é uma Landing Page para celebrar um aniversário. A página
      apresenta um contador regressivo que mostra quanto tempo falta para o
      evento começar. A página foi criada utilizando HTML, SCSS (que é compilado
      em CSS) e JavaScript, e faz uso da biblioteca AOS (Animate On Scroll) para
      adicionar efeitos de fade (desvanecer) aos componentes da página conforme
      o usuário faz o scroll.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/birthday_landingPage.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
export const Projeto9 = () => (
  <Card>
    <Title>Movie Page e interetividade com JS </Title>
    <Paragrafo tipo="secundario">
      Este projeto é uma Landing Page do filme Interestellar. A página apresenta
      um banner com a imagem do filme, a sinopse, um componente interativo feito
      em JavaScript para mostrar os trailers, elenco e galeria de fotos. A
      página foi criada utilizando HTML, SCSS (que é compilado em CSS) e
      JavaScript.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/movie_page.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
export const Projeto10 = () => (
  <Card>
    <Title>Disney Plus Clone: Animação com JS</Title>
    <Paragrafo tipo="secundario">
      Este projeto é um clone do serviço de streaming Disney+. Ele visa replicar
      a interface do Disney+ e demonstrar algumas de suas principais
      funcionalidades. A página foi criada utilizando HTML, SCSS (que é
      compilado em CSS) e JavaScript.O código JavaScript é usado para adicionar
      interatividade ao projeto. Ele inclui funcionalidades como alternar abas,
      mostrar/ocultar elementos do cabeçalho com base na posição de rolagem da
      página e criar acordeões para as perguntas frequentes.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/clone_disneyplus.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
export const Projeto11 = () => (
  <Card>
    <Title>Projeto Sorteador: Automação de tarefas com Grunt</Title>
    <Paragrafo tipo="secundario">
      Este projeto é um aplicativo Web que permite ao usuário sortear um número
      aleatório em um intervalo definido.A página foi criada utilizando HTML,
      LESS (que é compilado em CSS), Grunt para automatizar tarefas e
      JavaScript. Funcionalidades: O usuário pode inserir um valor máximo para o
      intervalo do sorteio. O usuário pode clicar no botão Sortear Número para
      obter um número aleatório dentro do intervalo definido. Pré-requisitos:
      Node.js e Grunt CLI
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/sorteador_grunt.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export const Projeto12 = () => (
  <Card>
    <Title>Landing Page com Bootstrap</Title>
    <Paragrafo tipo="secundario">
      Essa é uma Landing Page de uma loja de sorvetes chamada Sorveteria Sky. O
      código faz uso de Bootstrap (versão 5.3.0-alpha3) para aplicar estilos à
      página. Em geral, essa Landing Page é projetada para apresentar a
      sorveteria de forma atraente e informativa. Ela utiliza recursos visuais,
      como imagens e carrossel, para chamar a atenção dos visitantes. O design
      responsivo permite que a página se adapte a diferentes tamanhos de tela,
      tornando-a adequada para visualização em dispositivos móveis e
      computadores.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/projeto_bootstrap.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
export const Projeto13 = () => (
  <Card>
    <Title>Loja de Livros com Bootstrap</Title>
    <Paragrafo tipo="secundario">
      Esta é uma Landing Page de uma loja de livros, projetada para treinar a
      responsividade usando o framework Bootstrap.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/Site_Responsivo.Ebac.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
export const Projeto14 = () => (
  <Card>
    <Title>Projeto Página Web com Bootstrap</Title>
    <Paragrafo tipo="secundario">
      Esse projeto é um exercício para treinar responsividade usando o framework
      Bootstrap. Ele consiste em uma página HTML com diversos elementos, como um
      carousel de imagens, um layout de grid responsivo para exibir cards em
      diferentes dispositivos e uma seção de informações pessoais com links para
      redes sociais.O projeto tem como objetivo demonstrar a utilização das
      classes do Bootstrap para tornar a página responsiva e adaptável a
      diferentes tamanhos de tela, além de apresentar alguns dos meus projetos
      usando cards e carousel de imagens.
    </Paragrafo>
    <LinkBotao
      href="https://github.com/eliassgo/Site_Responsivo.Ebac.git"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)
