import iconConquest from "../assets/icons/conquest-icon.svg";
import imgConquest from "../assets/images/img-conquests.svg";

export function Conquests() {
  return (
    <div className="bg-[#c5f4dc]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 relative">
        <div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl text-[#1a1a1a] text-center font-bold mb-8">
            Conquistas
          </h2>
          <p className="sm:text-xl mb-6 text-[#404040]">
            Algumas das nossas conquistas que foram obtidas com os anos de
            nossos trabalhos.
          </p>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-conquests items-center">
              <img src={iconConquest} alt="" className="w-14" />
              <h4 className="pl-6 text-2xl font-bold md:text-3xl text-[#2e2e2e]">
                Meio milhão de mudas
              </h4>
              <p className="pl-20 col-span-full text-[#404040]">
                Venture white dwarf great turbulent clouds rich in heavy atoms
                realm of the galaxies take root and flourish? Sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quae rat voluptatem totam rem aperiam
              </p>
            </div>

            <div className="grid grid-cols-conquests items-center">
              <img src={iconConquest} alt="" className="w-14" />
              <h4 className="pl-6 text-2xl font-bold md:text-3xl text-[#2e2e2e]">
                Meio milhão de mudas
              </h4>
              <p className="pl-20 col-span-full text-[#404040]">
                Venture white dwarf great turbulent clouds rich in heavy atoms
                realm of the galaxies take root and flourish? Sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quae rat voluptatem totam rem aperiam
              </p>
            </div>

            <div className="grid grid-cols-conquests items-center">
              <img src={iconConquest} alt="" className="w-14" />
              <h4 className="pl-6 text-2xl font-bold md:text-3xl text-[#2e2e2e]">
                Meio milhão de mudas
              </h4>
              <p className="pl-20 col-span-full text-[#404040]">
                Venture white dwarf great turbulent clouds rich in heavy atoms
                realm of the galaxies take root and flourish? Sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quae rat voluptatem totam rem aperiam
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={imgConquest}
            alt=""
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
