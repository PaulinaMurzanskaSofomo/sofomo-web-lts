import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { imagesList } from "../../../assets/images";
import { DottedArrow } from "../../atoms";
import { imageSwiperBreakpoints, onInit } from "../../../libs/swiper";
import {
  StyledImagesSwiper,
  StyledImagesWrapper,
  StyledIndicators,
  StyledOverlay,
  SwiperImage,
} from "./StyledImagesSwiper";

export const ImagesSwiper: FC = () => {
  type RefType = React.MutableRefObject<null>;

  const swiperImagePrevRef: RefType = useRef(null);
  const swiperImageNextRef: RefType = useRef(null);
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrev, setDisablePrev] = useState(true);

  const handleClick = () => {
    const elNext = document.querySelector("#next");
    const elPrev = document.querySelector("#prev");
    if (elNext?.classList.contains("swiper-button-disabled")) {
      setDisableNext(true);
    } else setDisableNext(false);
    if (elPrev?.classList.contains("swiper-button-disabled")) {
      setDisablePrev(true);
    } else setDisablePrev(false);
  };

  return (
    <StyledImagesSwiper>
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: swiperImagePrevRef.current, nextEl: swiperImageNextRef.current }}
        onInit={(swiper) => onInit(swiperImagePrevRef, swiperImageNextRef, swiper)}
        spaceBetween={20}
        speed={300}
        breakpoints={imageSwiperBreakpoints}
        className="images-swiper"
      >
        {imagesList.map((item: any, i: number) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <StyledImagesWrapper>
              {item.map((image: any, i: number) => (
                <SwiperImage
                  key={i}
                  src={image.image}
                  alt="swiper"
                  height={image.height}
                  className="swiper-image"
                />
              ))}
            </StyledImagesWrapper>
          </SwiperSlide>
        ))}
        <StyledIndicators
          className="swiper-prev"
          id="prev"
          ref={swiperImagePrevRef}
          onClick={handleClick}
        >
          <DottedArrow variant={"left"} />
        </StyledIndicators>
        <StyledIndicators
          className="swiper-next"
          id="next"
          onClick={handleClick}
          ref={swiperImageNextRef}
        >
          <DottedArrow variant={"right"} />
        </StyledIndicators>
        <StyledOverlay className={`overlay-left ${disableNext ? "active" : ""}`} />
        <StyledOverlay className={`overlay-right ${disablePrev ? "active" : ""}`} />
      </Swiper>
    </StyledImagesSwiper>
  );
};
