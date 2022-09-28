import imgMain from "../assets/images/img-main.jpg";

export function Main() {
  return (
    <div className="main flex flex-col items-center min-h-screen">
      <div className="absolute inset-0 top-[76px] lg:top-[100px]">
        <img src={imgMain} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="conteudo-main py-16 px-8 mx-8 bg-[#82E5B3] rounded-2xl absolute bottom-0 translate-y-1/2">
        <h1 className="flex justify-center text-center py-8 text-3xl sm:text-4xl font-bold text-[#1a1a1a] before:content[''] before:w-20 before:h-20 before:rounded-full before:bg-[#0d894a] before:absolute before:top-0 before:-translate-y-1/2">
          Projeto 8 Verde
        </h1>

        <p className="max-w-[600px] text-center text-base sm:text-xl text-[#404040] leading-normal">
          Somos a associação de Proteção Ambiental Oito Verde, e nos ultimos
          sete anos temos trabalhado no plantio e distribuição d e mudas,
          visando aumentar as ações e profissionalizar o trabalho para obter
          financiamento de empresas privadas e governos municipais, estaduais e
          federal.
        </p>
      </div>
    </div>
  );
}
