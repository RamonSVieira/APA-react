import imgFormulario from "../assets/images/img-formulario.svg";

import { Button } from "./utilities/Button";

export function Formulario() {
  return (
    <div className="grid grid-cols-gridFormulario">
      <div>
        <img className="w-full max-h-sectionHeader object-cover" src={imgFormulario} alt="" />
      </div>
      <div className="flex flex-col items-center bg-[#4ac687]">
        <h1 className="pt-12 text-5xl font-semibold">VENHA NOS VISITAR</h1>
        <p className="text-center pt-10 text-lg max-w-lg text-[#404040]">
          Caso voce esteja interessado em fazer uma visita com seus alunos, nós
          iremos recebe-los com todo prazer e mostraremos a todos eles a
          importancia de cuidar da natureza e do nosso planeta terra.
        </p>

        <form className="w-full max-w-lg mt-20 m-0" action="">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col" id="nome">
              <label htmlFor="nome">Nome</label>
              <input
                className="w-full h-[56px] rounded"
                type="text"
                id="nome"
                placeholder="Centro Educional Informar..."
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="visitantes">Número de Visitantes</label>
                <input
                  className="w-full h-[56px] rounded"
                  type="number"
                  id="visitantes"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="turmas">Número de turmas</label>
                <input
                  className="w-full h-[56px] rounded"
                  type="number"
                  id="turmas"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="telefone">Telefone de contato</label>
                <input
                  className="w-full h-[56px] rounded"
                  type="text"
                  id="telefone"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="data">Data da visita</label>
                <input
                  className="w-full h-[56px] rounded"
                  type="date"
                  id="data"
                />
              </div>
            </div>

            <div className="flex flex-col" id="email">
              <label htmlFor="email">Email de contato</label>
              <input
                className="w-full h-[56px] rounded"
                type="email"
                id="email"
                placeholder="emailcontato@gmail.com"
              />
            </div>

            
            
            <Button title="Enviar"  />
          </div>
        </form>
      </div>
    </div>
  );
}
