import { Formulario } from "./components/Formulario";

import { Conquests } from "./components/Conquests";

import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { Objetivos } from "./components/Objetivos";
import { Contact } from "./components/Contact";

import "./styles/main.css";
import { Adopt } from "./components/Adopt";
import { Partners } from "./components/Partners";

function App() {
  function addPaddObgSection() {
    const contentMain = document.querySelector(".conteudo-main")?.clientHeight;

    const objetivos = Array.from(
      document.getElementsByClassName(
        "section-objetivos"
      ) as HTMLCollectionOf<HTMLElement>
    );

    if (contentMain) {
      const heightContentMainByTwo = contentMain / 2;

      objetivos.forEach((box) => {
        box.style.paddingTop = `${heightContentMainByTwo + 36}px`;
      });
    }
  }

  window.addEventListener("resize", () => {
    addPaddObgSection();
  });

  window.addEventListener("load", () => {
    addPaddObgSection();
  });

  return (
    <div className="font-primary">
      <Header />

      <Main />

      <Objetivos />

      <Conquests />

      {/* <Formulario /> */}

      <Adopt />

      <Partners />

      {/* <Contact /> */}
    </div>
  );
}

export default App;
