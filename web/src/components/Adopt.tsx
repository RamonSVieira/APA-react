import imgAdopt from "../assets/images/imgs-adote.png";
import { Button } from "./utilities/Button";

export function Adopt() {
  return (
    <div className="bg-[#c5f4dc]">
      <div className="max-w-7xl mx-auto px-6 py-16 gap-10 items-center relative">
        <div className="flex flex-col lg:flex-row gap-9 items-center justify-around py-10 px-10 bg-adopt-green rounded-2xl border-2 border-[#0047231a] shadow-md">
          <div>
            <img src={imgAdopt} alt="" />
          </div>

          <div className="flex flex-col items-center gap-10 ">
            <h3 className="text-center text-3xl sm:text-4xl md:text-4xl font-bold text-transparent bg-nlw-gradient bg-clip-text">
              Adote uma muda.
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-2xl leading-7 max-w-[24ch]">
              Com alguns cliques voce pode adquirir a sua própria muda.
            </p>
            <Button title="adquirir muda" />
          </div>
        </div>
      </div>
    </div>
  );
}
