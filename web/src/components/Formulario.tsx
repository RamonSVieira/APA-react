import imgFormulario from "../assets/images/img-formulario.svg";


export function Formulario() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        <img src={imgFormulario} alt="" className="max-w-full object-cover"/>
      </div>
      <div className="flex flex-col items-center bg-[#4ac687] col-span-7">
        <h1 className="pt-12 text-5xl font-semibold">VENHA NOS VISITAR</h1>
        <p className="text-center pt-10 text-lg max-w-lg text-[#404040]">Caso voce esteja interessado em fazer uma visita com seus alunos, nós iremos recebe-los com todo prazer e mostraremos a todos eles a importancia de cuidar da natureza e do nosso planeta terra.</p>



        <form></form>


      </div>
    </div>
  );
}