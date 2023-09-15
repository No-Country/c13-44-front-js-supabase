import { useState } from "react";
import { useFetchCards } from "../../hooks/Customs/useFetchCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Button } from "@nextui-org/react";
import { IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons-react";
import CardPropiedades from "../card";
import { useLocation } from "wouter";
import { StateValues } from "../../routers/auth/login/Interface";

export const SwiperHome = () => {
  const [_, setLocation] = useLocation();
  const [swiperValue, setSwiperValue] = useState<StateValues>();
  const [swiper2Value, setSwiper2Value] = useState<StateValues>();
  const myCards = useFetchCards("main", true);
  const myCardsHome = useFetchCards("oferta", true);

  return (
    <>
      <Swiper
        loop={true}
        onSwiper={(value) => {
          setSwiperValue(value);
        }}
        className="max-w-[62rem]"
        modules={[Autoplay, Pagination, Scrollbar]}
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2.8,
            spaceBetween: 35,
          },
        }}
      >
        {myCardsHome.map((posting, indexFirst) => (
          <SwiperSlide key={`indexFirst-${indexFirst}`}>
            <CardPropiedades
              onClick={() => setLocation(`/reservacion/${posting.id}`)}
              id={posting.id}
              titulo={posting.titulo}
              precio={posting.precio}
              localizacion={posting.localizacion}
              imagen={posting.imagen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-5">
        <Button
          onClick={() => swiperValue?.slidePrev()}
          variant="ghost"
          isIconOnly
          color="danger"
          aria-label="Like"
        >
          <IconArrowBigLeft />
        </Button>
        <Button
          onClick={() => swiperValue?.slideNext()}
          variant="shadow"
          isIconOnly
          color="danger"
          aria-label="Like"
        >
          <IconArrowBigRight />
        </Button>
      </div>
      <div className="flex flex-col  items-center gap-10">
        <h1 className=" font-bold text-4xl">
          Los planes <span className="text-primary">mejor valorados</span>
        </h1>
        <p className="max-w-xs text-center text-primary">
          Planifica tus vacaciones perfectas con nuestra agencia de viajes
        </p>
        <div className="flex gap-5 items-center ">
          <Button
            onClick={() => swiper2Value?.slidePrev()}
            variant="ghost"
            isIconOnly
            color="danger"
            aria-label="Like"
          >
            <IconArrowBigLeft />
          </Button>
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            loop={true}
            onSwiper={(v) => setSwiper2Value(v)}
            className="max-w-[62rem]"
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2.8,
                spaceBetween: 35,
              },
            }}
          >
            {myCards.map((posting, indexSecond) => (
              <SwiperSlide key={`indexSecond-${indexSecond}`}>
                <CardPropiedades
                  onClick={() => setLocation(`/reservacion/${posting.id}`)}
                  id={posting.id}
                  titulo={posting.titulo}
                  precio={posting.precio}
                  localizacion={posting.localizacion}
                  imagen={posting.imagen}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            onClick={() => swiper2Value?.slideNext()}
            variant="shadow"
            isIconOnly
            color="danger"
            aria-label="Like"
          >
            <IconArrowBigRight />
          </Button>
        </div>
      </div>
    </>
  );
};
