import imgFormulario from "../assets/images/img-formulario.svg";

import { Button } from "./utilities/Button";

export function Formulario() {
  return (
    <div className="grid grid-cols-gridFormulario ">
      <div>
        <img
          className="w-full h-full max-h-sectionHeader object-cover"
          src={imgFormulario}
          alt=""
        />
      </div>
      <div className="bg-[#4ac687] ">
        <div className="mx-5 flex flex-col items-center">
          <h1 className="text-center pt-12 m-0 text-5xl font-semibold text-[#1a1a1a]">
            VENHA NOS VISITAR
          </h1>
          <p className="text-center pt-10 m-0 text-lg max-w-lg text-[#404040]">
            Caso voce esteja interessado em fazer uma visita com seus alunos,
            nós iremos recebe-los com todo prazer e mostraremos a todos eles a
            importancia de cuidar da natureza e do nosso planeta terra.
          </p>

          <form className=" max-w-lg w-full  mx-[200px]" action="">
            <div className="flex flex-col gap-6 py-10">
              <div className="flex flex-col" id="nome">
                <label className="mb-2 text-lg text-[#404040]" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="w-full h-[56px] rounded-lg placeholder:pl-2"
                  type="text"
                  id="nome"
                  placeholder="Centro Educional Informar..."
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg text-[#404040]"
                    htmlFor="visitantes"
                  >
                    Número de Visitantes
                  </label>
                  <input
                    className="w-full h-[56px] rounded-lg placeholder:pl-2"
                    type="number"
                    id="visitantes"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg text-[#404040]"
                    htmlFor="turmas"
                  >
                    Número de turmas
                  </label>
                  <input
                    className="w-full h-[56px] rounded-lg placeholder:pl-2"
                    type="number"
                    id="turmas"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg text-[#404040]"
                    htmlFor="telefone"
                  >
                    Telefone de contato
                  </label>
                  <input
                    className="w-full h-[56px] rounded-lg placeholder:pl-2"
                    type="text"
                    id="telefone"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-lg text-[#404040]" htmlFor="data">
                    Data da visita
                  </label>
                  <input
                    className="w-full h-[56px] rounded-lg placeholder:pl-2"
                    type="date"
                    id="data"
                  />
                </div>
              </div>

              <div className="flex flex-col" id="email">
                <label className="mb-2 text-lg text-[#404040]" htmlFor="email">
                  Email de contato
                </label>
                <input
                  className="w-full h-[56px] rounded-lg placeholder:pl-2"
                  type="email"
                  id="email"
                  placeholder="emailcontato@gmail.com"
                />
              </div>

              <Button title="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
