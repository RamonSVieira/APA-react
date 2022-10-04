import imgFormulario from "../assets/images/img-formulario.svg";


export function Formulario() {
  return (
    <div className="gridFormulario">
      <picture>
        <img src={imgFormulario} alt="" className="max-w-full object-cover"/>
      </picture>
      <div>
        <h1>VENHA NOS VISITAR</h1>
      </div>
    </div>
  );
}