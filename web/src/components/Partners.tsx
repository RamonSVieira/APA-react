import imgPartner1 from "../assets/parceiros/aesa.svg";
import imgPartner2 from "../assets/parceiros/borborema-energetica.svg";
import imgPartner3 from "../assets/parceiros/cagepa.svg";
import imgPartner4 from "../assets/parceiros/cbh-pb.svg";
import imgPartner5 from "../assets/parceiros/dnocs.svg";
import imgPartner6 from "../assets/parceiros/energisa.svg";
import imgPartner7 from "../assets/parceiros/insa.svg";
import imgPartner8 from "../assets/parceiros/ministerio-publico.svg";
import imgPartner9 from "../assets/parceiros/prefeitura-municipal-boqueirao.svg";
import imgPartner10 from "../assets/parceiros/Sebrae.svg";
import imgPartner11 from "../assets/parceiros/sudema.svg";
import imgPartner12 from "../assets/parceiros/uepb.svg";

import { Partner } from "./utilities/Partner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export function Partners() {
  return (
    <div className="bg-[#73ffbc]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl text-center font-bold">
          Nossos parceiros
        </h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            920: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <Partner url={imgPartner1} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner2} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner3} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner4} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner5} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner6} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner7} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner8} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner9} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner10} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner11} alt="Logotipo da aesa" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner url={imgPartner12} alt="Logotipo da aesa" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
