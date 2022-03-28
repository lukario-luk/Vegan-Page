import React, { Component } from "react";
import Cards from "./Cards.js";
import Recipe1 from "../assets/Chilli-de-feijao.jpg";
import Recipe2 from "../assets/Espaguete-com-brocolis.jpg";
import Recipe3 from "../assets/Hamburguer-de-lentilha.jpeg";
import Recipe4 from "../assets/Mousse-de-coco.jpg";
import Recipe5 from "../assets/Muffin-de-chocolate-com-feijao.jpeg";
import Recipe6 from "../assets/Paella-vegana.jpeg";
import fundo from "../assets/fundo3.png"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;
const DisplayProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
background-image:url(${fundo});
 background-size:20%;
 background-repeat:repeat;
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Itens = styled.li`
  margin-bottom: 3%;
`;
export default class Main extends Component {
  state = {
    recipes: [
      {
        recipeImg: Recipe1,
        name: "Chilli de feijão",
        recipeAlt: "Chilli de feijão",
        ingredients: [
          "100 gramas de carne moída",
          "1 colher de sopa de óleo",
          "2 dentes de alho picados",
          "1 cebola pequena picada",
          "1 tomate médio picado",
          "2 colheres de sopa de extrato de tomate",
          "1 pitada de cominho em pó",
          "1 colher de chá de pimenta dedo-de-moça picada",
          "pimenta-do-reino a gosto",
          "Sal a gosto",
          "1 embalagem de Feijão Preto Pronto Camil",
          "1 colher de sopa de coentro picado"
        ],
        preparation: [
          "Em uma panela, aqueça o óleo em fogo médio, refogue o alho e a cebola até dourar. Junte a carne e refogue até que perca a cor avermelhada. Junte o tomate, o extrato de tomate, o cominho, a pimenta dedo-de-moça, a pimenta-do-reino e o sal. Cozinhe por alguns minutos. Junte o feijão preto e cozinhe até engrossar levemente. Retire do fogo e adicione o coentro. Sirva em seguida com nachos ou tacos. Ou, se preferir, com arroz.",
          "Rendimento - 4 porções",
          "Tempo de preparo - 30 minutos"
        ]
      },
      {
        recipeImg: Recipe2,
        name: "Espaguete com brócolis",
        recipeAlt: "Espaguete com brócolis",
        ingredients: [
          "250 gramas de macarrão espaguete de grano duro (sem ovos).",
          "3 colheres de molho de soja.",
          "2 dentes de alho picados.",
          "2 colheres de sopa de azeite de oliva.",
          "1 maço de brócolis cozido em água e sal.",
          "Pimenta a gosto."
        ],
        preparation: [
          "Em primeiro lugar, cozinhe o macarrão em água e sal, escorra e reserve um pouco da água do cozimento.",
          "Em segundo lugar, em uma panela, refogue o alho com o azeite, junte o brócolis e frite um pouco.",
          "Junte o macarrão ao brócolis, acrescente o molho de soja e a água do cozimento.",
          "Por fim, tempere com pimenta e mexa por 2 minutos."
        ]
      },
      {
        recipeImg: Recipe3,
        name: "Hambúrguer de lentilha",
        recipeAlt: "Hambúrguer de lentilha",
        ingredients: [
          "250 g de lentilha cozida.",
          "1 cebola média picada.",
          "1/2 xícara (chá) de cheiro verde picado.",
          "1/2 xícara de farinha mandioca.",
          "Páprica defumada a gosto.",
          "Pimenta do reino a gosto.",
          "Uma pitada de açafrão da terra.",
          "Uma pitada de sal."
        ],
        preparation: [
          "Cozinhe a lentilha, podendo descartar a água do cozimento, mas não precisa secar completamente; só tire o excesso, pois ela úmida é importante para deixar o hambúrguer macio.",
          "Em seguida, adicione a cebola, cheiro verde, a páprica defumada, o açafrão da terra, a pimenta do reino e o sal.",
          "Depois, acrescente a farinha de mandioca aos poucos, até dar o ponto de modelar.",
          "Divida a massa em cinco partes iguais e passe um fio de óleo nas mãos.",
          "Modele os hambúrgueres com cerca de 1,5 cm de espessura.",
          "Coloque os hambúrgueres em uma forma untada ou com papel manteiga e leve ao freezer por uma hora.",
          "Retire com cuidado, frite em uma frigideira antiaderente com um fio de óleo, e vire quando estiver bem douradinho. Está pronto!",
          "Obsrvação: quer fazer assado? Dá também! É só deixar no forno por cerca de 40 minutos em 180º C, e ir observando até ele ficar douradinho."
        ]
      },
      {
        recipeImg: Recipe4,
        name: "Mousse de coco",
        recipeAlt: "Mousse de coco",
        ingredients: [
          "1 xícara de chá de coco fresco ou 150gr de coco seco hidratado.",
          "200 ml de leite de coco.",
          "1 xícara de chá de água.",
          "1/2 colher de chá de ágar-ágar.",
          "3 colheres de sopa de cacau.",
          "2 colheres de sopa de leite de coco.",
          "Coco fresco para decorar."
        ],
        preparation: [
          "Primeiramente, em uma panela, coloque a água e o leite de coco (reserve 2 colheres para a cobertura).",
          "Logo após, acrescente o ágar-ágar, mexendo sempre até ferver (fogo médio).",
          "Em seguida, quando levantar fervura, abaixe o fogo e continue mexendo por 1 minuto.",
          "Acrescente o coco e então coloque em taças.",
          "Por fim, para a cobertura, misture o cacau com o leite de coco reservado, coloque sobre a mousse e decore com coco fresco. Leve para gelar por 2hrs."
        ]
      },
      {
        recipeImg: Recipe5,
        name: "Muffin de chocolate com feijão",
        recipeAlt: "Muffin de chocolate com feijão",
        ingredients: [
          "1/2 xícara de açúcar demerara.",
          "1/2 xícara de cacau em pó.",
          "1 e 1/2 xícara de de feijão preto cozido e escorrido (apenas grãos).",
          "1 colher de chá de extrato de baunilha.",
          "2 colher de sopa de farinha de linhaça estabilizada.",
          "3 colher de sopa de óleo de coco derretido.",
          "1 colher de sopa de fermento químico em pó.",
          "6 colheres de sopa de água."
        ],
        preparation: [
          "Misture a linhaça com a água e deixe descansando até ficar pegajoso. Em seguida, reserve (essa mistura substituirá o ovo na preparação).",
          "Em um processador, triture o feijão. Quando os pedaços estiverem bem pequenos, adicione a baunilha, o açúcar, o cacau, o óleo de coco e a mistura de linhaça.",
          "Ligue novamente o processador e misture até a massa ficar cremosa e aerada. Caso você faça no liquidificador, talvez seja necessário adicionar um pouco de água nesse momento.",
          "Com o processador desligado, adicione o fermento e misture levemente com o auxílio de uma espátula. Transfira a massa para nove forminhas untadas e leve ao forno, assando em fogo médio a baixo por, aproximadamente, 40 minutos."
        ]
      },
      {
        recipeImg: Recipe6,
        name: "Paella vegana",
        recipeAlt: "Paella vegana",
        ingredients: [
          "1/2 brócolis.",
          "2 cenouras.",
          "1 pimentão.",
          "1 bandeja de ervilha torta.",
          "1 bandeja de vagem.",
          "1 xícara de ervilha fresca (congelada).",
          "1 cebola.",
          "3 dentes de alho.",
          "1 xícara de arroz parboilizado.",
          "1 linguiça vegetal ou tofu defumado (opcional).",
          "Açafrão da terra.",
          "Água filtrada."
        ],
        preparation: [
          "Pique todos os vegetais e reserve.",
          "Pegue uma panela e coloque um fio de azeite e metade da cebola e do alho picados. Doure levemente a cebola e o alho e colocque todos os vegetais na panela com um pouquinho de água para cozinhar.",
          "Em outra panela, coloque um fio de azeite e o resto da cebola e do alho picados. Doure levemente a cebola e o alho. Coloque em seguida o arroz e a água, (para uma xícara de arroz, usa-se duas xícaras de água), uma colher de chá de açafrão da terra e uma pitada de pimenta do reino e sal.",
          "Quando o arroz estiver pronto, misture com os legumes.",
          "Opcional: acrescente linguiça vegetal defumada."
        ]
      }
    ]
  };
  dispĺayIngredients = () => {
    this.state.recipes.ingredients.map((ingre) => <li>{ingre}</li>);
  };
  render() {
    return (
      <DisplayProducts>
        <List>
          <GlobalStyle />

          {this.state.recipes.map((item) => (
            <Cards
              img={item.recipeImg}
              imgAlt={item.recipeAlt}
              name={item.name}
              Ingredients={item.ingredients.map((i) => (
                <Itens>{i}</Itens>
              ))}
              Preparation={item.preparation}
            />
          ))}
        </List>
      </DisplayProducts>
    );
  }
}
