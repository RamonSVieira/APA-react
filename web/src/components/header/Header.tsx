import logo from "../../assets/images/APA8VERDE-logo.svg";

import { Button } from "../Button";
import { Hamburger } from "./Hamburger";

export function Header() {
  return (
    <header className="bg-dark-green w-full">
      <div className="max-w-7xl flex justify-around items-center flex-wrap mx-auto py-6">
        <a href="">
          <img src={logo} alt="" />
        </a>

        <nav>
          <ul className="hidden lg:flex gap-8 flex-wrap items-center justify-center text-white text-xl font-medium">
            <li className="transition duration-200 hover:text-[#82E5B3]">
              <a href="">Sobre</a>
            </li>
            <li className="transition duration-200 hover:text-[#82E5B3]">
              <a href="">Conquistas</a>
            </li>
            <li className="transition duration-200 hover:text-[#82E5B3]">
              <a href="">Mudas</a>
            </li>
          </ul>
        </nav>

        <Button title="Adquirir Mudas" />

        <Hamburger />
      </div>
    </header>
  );
}
