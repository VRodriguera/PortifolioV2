import React from 'react';
import '../App.css';
import Foto from '../Pictures/FotoPerfil.jpeg';
import Habilidades from '../Components/Habilidades';
import Aos from 'aos';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hardSkills: [
        ' Git e GitHub',
        ' HTML 5',
        ' CSS 3',
        ' JavaScript',
        ' JEST',
        ' ReactJS',
        ' Redux',
        ' RTL',
        ' TDD',
        ' MySQL',
        ' MongoDB',
        ' NodeJS'
      ],
      softSkills: [
        ' Comunicação',
        ' Escuta Ativa',
        ' Negociação',
        ' Trabalho em Grupo',
        ' Auto Conhecimento',
        ' Empatia',
        ' Dar e Receber Feedback',
        ' Pensamento Critico',
        ' Tomada de decisão',
        ' Criatividade',
        ' Curiosidade',
        ' liderança'
      ]
    }
  }

  componentDidMount() {
    Aos.init({ duration: 2000 });
  };

  render() {
    const { hardSkills, softSkills } = this.state;
    return (
      <div>
        <section className='perfil'>
          <section>
            <h1 id='name'>Vinicius Rodrigues</h1>
            <p className='infos'>"Sou um tanto curioso, adoro aprender coisas novas e tentar entender
            <br />
            tudo aquilo que por algum motivo ainda não temos explicação".</p>
            <p className='infos'><span role="img" aria-label="Nerd Face">🤓</span> t.i</p>
            <p className='infos'><span role="img" aria-label="laptop">💻</span> estudante de desenvolvimento web</p>
            <p className='infos'><span role="img" aria-label="gamepad">🎮</span> gamer</p>
            <p className='infos'><span role="img" aria-label="Coffee">☕</span> bebedor de café</p>
          </section>
          <img src={Foto} alt="Foto de Perfil" className='foto_perfil' />
        </section>
        <section className="descripton" data-aos="fade-down" data-aos-delay="500">
          <h2>descrição</h2>
          <p className="paragrafos_descricao">
            Meu nome é Vinicius Rodrigues, tenho 21 anos sou natural de Curitiba PR,
            minhas maiores paixões são a tecnologia e os eSports/video games, em geral.
        </p>
          <p className="paragrafos_descricao">
            Sempre estive em contato com tecnologia e minha curiosidade no assunto era alimentada
            por uma vontade de viver nesse meio e trabalhar com isso, no ano de 2019 dei início a
            um curso profissionalizante de T.I, mas com o passar do tempo vi que não era exatamente
            a área que supriria aquela vontade de trabalhar com tecnologia.
          </p>
          <p className="paragrafos_descricao">
            Então no ano de 2020 em meio a pandemia, através de um amigo conheci a
            <a
              id="link_trybe"
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noopener noreferrer"
            > Trybe</a>, e decidi aceitar o desafio de em um ano sair do 0 e me tornar um desenvolvedor web,
            <br />
            e se você esta lendo isso é por que esta dando certo! #VQV
          </p>
        </section>
        <div className='habilidades_title'>
          <h2>habilidades</h2>
        </div>
        <section data-aos="fade-down" data-aos-delay="700" className='habilidades'>
          <section>
            <h1 id='hard_skills'>hard skills</h1>
            {hardSkills.map((hardSkill) => <Habilidades skill={hardSkill} />)}
          </section>
          <section>
            <h1 id='soft_skills'>soft skills</h1>
            {softSkills.map((softSkill) => <Habilidades skill={softSkill} />)}
          </section>
        </section>
      </div>
    );
  };
}

export default Home;
