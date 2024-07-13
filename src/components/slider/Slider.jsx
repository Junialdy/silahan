"use client";

import { useKeenSlider } from "keen-slider/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "keen-slider/keen-slider.min.css";
import "./slider.css";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/tmp/gambar1.jpg",
  "/tmp/gambar2.jpg",
  "/tmp/gambar3.jpg",
  "/tmp/gambar4.jpg",
  "/tmp/gambar5.jpg",
  "/tmp/gambar6.jpg",
  "/tmp/gambar7.jpg",
];

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider main">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide number-slide">
            <Image src={`/tmp/gambar1.jpg`} alt="" fill sizes={200} />
          </div>
        ))}
      </div>
      <div className="navigation-wrapper">
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide number-slide">
              <Image src={`/tmp/gambar1.jpg`} alt="" fill sizes={100} />
            </div>
          ))}
        </div>
        <BsChevronLeft
          className={`arrow arrow-left ${currentSlide === 0 ? "disabled" : ""}`}
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        />
        {/* {console.log(instanceRef)} */}
        <BsChevronRight
          className={`arrow arrow-right ${
            currentSlide === instanceRef?.current?.slides.length - 1
              ? "disabled"
              : ""
          }`}
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        />
      </div>
    </>
  );
};

export default Slider;
