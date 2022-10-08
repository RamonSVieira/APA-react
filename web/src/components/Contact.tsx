import local from "../../public/img-contact/local.svg";
import Whatsapp from "../../public/img-contact/whats.svg";
import email from "../../public/img-contact/email.svg";
import telefone from "../../public/img-contact/telefone.svg";

import "../styles/main.css";


export function Contact() {
  return (
    <div className=" bg-bgContact text-center py-[60px] flex flex-col items-center">
      <h1 className="text-5xl text-[#1a1a1a] font-extrabold mb-10">
        Entre em contato Conosco
      </h1>

      <p className="text-[#404040] text-center max-w-[600px] text-lg">
        Somos um projeto sério que busca a melhora do meio ambiente atraves de
        projetos internos que visam e priorizam o reflorestamento mas também nos
        preocupamos com a conscientização.
      </p>

      <div className="pt-20">
        <ul className="flex gap-28 items-center">
          <li className="relative before:content-[''] before:absolute before:bg-[#fff] before:w-[1px]  before:h-[168px] before:right-[-56px] item-contato flex flex-col gap-3 items-center">
            <img className="w-24 h-24" src={local} alt="" />
            <p>Endereço</p>
            <span>Boqueirão / PB</span>
          </li>
          <li className="relative before:content-[''] before:absolute before:bg-[#fff] before:w-[1px] before:h-[168px] before:right-[-56px] flex flex-col gap-3 items-center">
            <img className="w-24 h-24" src={Whatsapp} alt="" />
            <p>Whatsapp</p>
            <span>+558440028922</span>
          </li>
          <li className="relative before:content-[''] before:absolute before:bg-[#fff] before:w-[1px] before:h-[168px] before:right-[-56px] item-contato flex flex-col gap-3 items-center">
            <img className="w-24 h-24"  src={email} alt="" />
            <p>Mande email</p>
            <span>contato@gmail.com</span>
          </li>
          <li className=" flex flex-col gap-3 items-center">
            <img className="w-24 h-24"  src={telefone} alt="" />
            <p>Nos ligue</p>
            <span>84999140772</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
