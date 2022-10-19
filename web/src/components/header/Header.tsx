import { useState } from "react";
import logo from "../../assets/images/APA8VERDE-logo.svg";

import { Button } from "../utilities/Button";
import { Hamburger } from "./Hamburger";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header
        className={`bg-dark-green w-full fixed z-50 ${
          open ? null : "shadow-[0_0px_65px_rgba(0,0,0,0.7)]"
        }`}
      >
        <div
          className={`max-w-7xl flex items-center justify-between flex-wrap py-6 px-6
          `}
        >
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

          <div className="hidden lg:block">
            <Button title="Adquirir Mudas" />
          </div>

          <div
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Hamburger />
          </div>
        </div>
      </header>

      <div
        className={`${
          open ? "translate-y-0" : "-translate-y-full"
        } min-h-screen bg-dark-green z-40 transition-all duration-300 fixed inset-0 flex flex-col items-center gap-10 `}
      >
        <nav className="mt-40">
          <ul className="flex flex-col items-center gap-10 text-white text-xl">
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Conquistas</a>
            </li>
            <li>
              <a href="">Mudas</a>
            </li>
          </ul>
        </nav>

        <Button title="Adquirir Mudas" />
      </div>
    </div>
  );
}
