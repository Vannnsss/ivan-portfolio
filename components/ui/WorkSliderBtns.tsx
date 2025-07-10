"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles = "",
  btnStyles = "",
  iconsStyles = "",
}) => {
  const swiper = useSwiper();

  if (!swiper) return null; // Hindari error jika swiper belum siap

  return (
    <div className={containerStyles}>
      <button type="button" className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button type="button" className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
