import anonymusProxy from "../../images/anonymus-proxy.jpg";
import harryPotter from "../../images/harry-potter.jpg";
import hangman from "../../images/ahorcado.jpg";
import otaku from "../../images/otaku-search.jpg";
import superPop from "../../images/super-pop.jpg";
import EachWork from "./EachWork";
const SelectedWorks = (props) => {
  return (
    <article className="selectedWorks" id="work">
      {/* Aqui mas adelante haré un hover en la imagen donde pasando el ratón por encima se verá la description */}
      <h2 className="selectedWorks__title">selected works</h2>
      <ul className="selectedWorks__container">
        <EachWork
          classRight="right"
          title="Anonymus Proxy"
          description="//This is my first Hello world, that is, my first responsive website and my first approach to web layout. Made entirely with HTML and Sass."
          href="https://sofiabmanzano.github.io/Anonymus-proxy/"
          img={anonymusProxy}
          photoColor={props.photoColor}
        />
        <EachWork
          title="Harry Potter Character Finder"
          description="//Responsive search engine for Harry Potter characters developed
          in React using an external API."
          href="https://sofiabmanzano.github.io/Buscador-Harry-Potter---React/#/"
          img={harryPotter}
          photoColor={props.photoColor}
        />

        <EachWork
          classRight="right"
          title="Hangman Game"
          description="//The well-known game that we have all played in class hiding from
          the teacher, made with React and a lot of love."
          href="https://sofiabmanzano.github.io/hangman-game/#/"
          img={hangman}
          photoColor={props.photoColor}
        />
        <EachWork
          title="Otaku search"
          description="//Responsive anime series search engine developed in vanilla
          javascript using an external API."
          href="https://sofiabmanzano.github.io/Buscador-series-anime-Javascript-Vanilla/"
          img={otaku}
          photoColor={props.photoColor}
        />

        <EachWork
          classRight="right"
          title="Super Pop!"
          description="//Group project. Responsive interactive website for creating
          cards. Made with javascript, HTML, Sass, Local Storage."
          href="https://sofiabmanzano.github.io/Super-Pop-/"
          img={superPop}
          photoColor={props.photoColor}
        />
      </ul>
    </article>
  );
};
export default SelectedWorks;
