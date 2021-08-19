import React from 'react';
import CardProject from '../Components/CardProject';


class Projects extends React.Component {
  render() {
    return (
      <div className="paginaProjetos">
        <div className="projects">
          <CardProject
            title="Project Shopping Cart"
            url="https://github.com/tryber/sd-010-a-project-shopping-cart/tree/VRodriguera-project-shopping-cart"
            description="Neste projeto foi desenvolvido um carrinho de compras totalmente dinamico, voce pode adicionar ou remover quantos produtos quiser do seu carrinho de compras recebendo em tempo real o valor atualizado do carrinho, consumindo informações dos produtos diretamente da API do mercado livre."
            tecs={["JavaScript", "HTML 5", "CSS 3"]}
          />
          <CardProject
            title="Project Movie Library Stateful Crud"
            url="https://github.com/tryber/sd-010-a-project-movie-card-library-crud/tree/VRodriguera-project-movie-card-library-crud"
            description="Neste projeto foi desenvolvido uma aplicação CRUD( A sigla CRUD significa, Create, Read, Update and Delete ) de cards de filmes, onde é possivel criar novos cards, ler, atualizar e deletar cards ja exstentes."
            tecs={["ReactJS", "JavaScript", "HTML 5", "CSS 3"]}
          />
          <CardProject
            title="Project Trivia React Redux"
            url="https://github.com/tryber/sd-010-a-project-trivia-react-redux/tree/main-group-17"
            description="Neste projeto foi desenvolvido em grupo um game de trivia(Perguntas e respostas) onde o objetivo principalmente foi praticar o gerenciamento de estados com Redux."
            tecs={["ReactJS", "Redux", "JavaScript", "HTML 5", "CSS 3", "Metodologis ageis(Kanban)"]}
          />
          <CardProject
            title="Project Recipes App"
            url="https://github.com/tryber/sd-010-a-project-recipes-app/tree/main-group-1"
            description="Neste projeto foi desenvolvido em grupo uma aplicação de receitas, toda direcionada ao mobile, neste app encontramos varias receitas de comidas e bebidas onde temos todo o passo a passo da receita alem de videos do método de preparo, temos tambem o perfil do usuario onde encontramos as receitas favorita alem de receitas em andamento."
            tecs={["ReactJS", "Context API", "JavaScript", "HTML 5", "CSS 3", "Metodologias ageis(Kanban)", "Figma", "Bootstrap"]}
          />
        </div>
        <h3 className="mensagem">Todos os projetos são de vies educacional aplicados pela 
          <a
              id="link_trybe"
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noopener noreferrer"
            > Trybe
            </a>.
        </h3>
      </div>
    );
  };
}

export default Projects;
