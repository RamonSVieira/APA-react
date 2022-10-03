import recovery from "../assets/icons/recovery.svg";
import promote from "../assets/icons/promote.svg";
import educate from "../assets/icons/educate.svg";

export function Objetivos() {
  return (
    <div className="section-objetivos bg-[#4ac687] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl text-center font-bold mb-8">
          Principais Objetivos
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm flex flex-col items-center gap-7 p-8 bg-[#b6f9d7] rounded-2xl">
            <div className="bg-[#06743c] rounded-full p-8">
              <img src={recovery} alt="" className="w-28" />
            </div>
            <h3 className="text-2xl sm:text-3xl  xl:text-4xl font-semibold text-[#1a1a1a]">
              Recuperação
            </h3>
            <p className="text-center text-lg sm:text-xl text-[#404040]">
              Promover a recuperação da mata ciliar em torno do Açude Epitácio
              Pessoa, sendo este importante, pois abastece dezenove cidades.
            </p>
          </div>

          <div className="max-w-sm flex flex-col items-center gap-7 p-8 bg-[#b6f9d7] rounded-2xl">
            <div className="bg-[#06743c] rounded-full p-8">
              <img src={promote} alt="" className="w-28" />
            </div>
            <h3 className="text-2xl sm:text-3xl  xl:text-4xl font-semibold text-[#1a1a1a]">
              Promover
            </h3>
            <p className="text-center text-lg sm:text-xl text-[#404040]">
              A segunda Meta do projeto visa a educação ambiental no Município
              de Boqueirão, começando pelas escolas municipais e estaduais.
            </p>
          </div>

          <div className="max-w-sm flex flex-col items-center gap-7 p-8 bg-[#b6f9d7] rounded-2xl">
            <div className="bg-[#06743c] rounded-full p-8">
              <img src={educate} alt="" className="w-28" />
            </div>
            <h3 className="text-2xl sm:text-3xl  xl:text-4xl font-semibold text-[#1a1a1a]">
              Educar
            </h3>
            <p className="text-center text-lg sm:text-xl text-[#404040]">
              Por fim, o projeto permite a execução de medidas socio-educativas
              em meio aberto, para aqueles jovens e estudantes que buscam
              colaborar com o meio ambiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
