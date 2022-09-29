import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { Objetivos } from "./components/Objetivos";

import "./styles/main.css";

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
    </div>
  );
}

export default App;
