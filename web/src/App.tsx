import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { Objetivos } from "./components/Objetivos";

import "./styles/main.css";

function App() {
  window.addEventListener("resize", () => {
    const contentMain = document.querySelector(".conteudo-main")?.clientHeight;

    const objetivos = Array.from(
      document.getElementsByClassName(
        "section-objetivos"
      ) as HTMLCollectionOf<HTMLElement>
    );

    if (contentMain) {
      const heightContentMainByTwo = contentMain / 2;
      console.log(heightContentMainByTwo);

      objetivos.forEach((box) => {
        box.style.paddingTop = `${heightContentMainByTwo}px`;
      });
    }
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
