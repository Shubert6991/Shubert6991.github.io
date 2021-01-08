//proyecto 1
import portada1 from "../images/proyecto1/portada.png";
import img11 from "../images/proyecto1/img1.png";
import img21 from "../images/proyecto1/img2.png";
import img31 from "../images/proyecto1/img3.png";

//proyecto 2
import portada2 from "../images/proyecto2/portada.png";
import img12 from "../images/proyecto2/img1.png";
import img22 from "../images/proyecto2/img2.png";
import img32 from "../images/proyecto2/img3.png";

//proyecto 3
import portada3 from "../images/proyecto3/portada.png";
import img13 from "../images/proyecto3/img1.png";
import img23 from "../images/proyecto3/img2.png";
import img33 from "../images/proyecto3/img3.png";

//proyecto 4
import portada4 from "../images/proyecto4/Portada.png";
import img14 from "../images/proyecto4/img1.png";
import img24 from "../images/proyecto4/img2.png";
import img34 from "../images/proyecto4/img3.png";

export const data = [
  {
    id: 1,
    portada: portada1,
    img1: img11,
    img2: img21,
    img3: img31,
    title: "Portfolio (this site)",
    description:
      "A responsive single-page website to showcase my proyects.\n Tecnologies: React, Bootstap, Typescript.",
    descriptionDetailed:
      "A responsive single-page website to showcase my proyects. Created with React and bootstrap using typescript and published with github pages.",
    github: "https://github.com/Shubert6991/Shubert6991.github.io",
  },
  {
    id: 2,
    portada: portada2,
    img1: img12,
    img2: img22,
    img3: img32,
    title: "MatrioshTS",
    description:
      "A project that translates a typescript like a language with nested functions to javascript.\n Tecnologies: Bootstrap, Javascript, Jison, Codemirror, Graphviz.",
    descriptionDetailed:
      "A project that translates a typescript like a language with nested functions to javascript, the application uses jison to create a lexer and parser that recognizes the language.\n It includes a graphical view of the AST generated and a table of errors that the language might have.",
    github: "https://github.com/Shubert6991/OLC2_Proyecto1",
  },
  {
    id: 3,
    portada: portada3,
    img1: img13,
    img2: img23,
    img3: img33,
    title: "BMI App",
    description:
      "Simple app that calculates your BMI (Body Mass Index).\n Tecnologies: React, Ionic.",
    descriptionDetailed:
      "Simple app that calculates your BMI (Body Mass Index)",
    github: "https://github.com/Shubert6991/BMI_app",
  },
  {
    id: 4,
    portada: portada4,
    img1: img14,
    img2: img24,
    img3: img34,
    title: "GTMarketplace",
    description:
      "Website to sell and buy products.\n Tecnologies: Angular, Angular Material, Nodejs, OracleDB.",
    descriptionDetailed:
      "Website to sell and buy products created with Angular, it consumes an API created with NodeJs that connects to an Oracle database to obtain and add data (products, users, prices, etc..).",
    github: "https://github.com/Shubert6991/-MIA-Proyecto2",
  },
];
