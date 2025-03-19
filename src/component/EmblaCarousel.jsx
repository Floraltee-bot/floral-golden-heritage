"use client";
import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import slide1 from "../../public/image/floral_building.png";
import slide2 from "../../public/image/frontview.jpg";
import slide3 from "../../public/image/primary.jpg";
import slide4 from "../../public/image/books.jpg";
import slide5 from "../../public/image/bsc_4.jpg";
import slide6 from "../../public/image/communities.jpeg";
import slide7 from "../../public/image/prefects.jpeg";
import slide8 from "../../public/image/prj.jpeg";
import slide9 from "../../public/image/play_3.jpeg";
import slide10 from "../../public/image/gal7.png";
import { IconFriends } from "@tabler/icons-react";
import { IconVocabulary } from "@tabler/icons-react";
import { IconAward } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section id="intro" className="embla bg-white pb-10">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide1} alt="Picture of slide 1" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide2} alt="Picture of slide 2" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide3} alt="Picture of slide 3" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide4} alt="Picture of slide 4" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide5} alt="Picture of slide 5" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide6} alt="Picture of slide 5" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide7} alt="Picture of slide 5" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide8} alt="Picture of slide 5" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide9} alt="Picture of slide 5" fit="true" />
          </div>
          <div className="embla__slide">
            <Image className="w-full h-auto object-contain" src={slide10} alt="Picture of slide 5" fit="true" />
          </div>
        </div>
      </div>

      {/* <div className="embla__buttons">
        <div className="emblaprev">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="emblanext">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
      <div className="slider-boxes  w-full justify-around">
        <div className="flex gap-20 bg-emerald-500 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-amber-100 cursor-pointer">
          <div className="relative text-emerald-700 ml-5">
            <IconFriends width={60} height={60} />
          </div>
          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
                Quality Education
                
              </h1>
            </div>

            {/* <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div> */}
          </div>
        </div>
        <div className="flex gap-10 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-amber-100 cursor-pointer">
          <div className="relative text-emerald-700 ml-5">
            <IconAward width={60} height={60} />
          </div>
          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
                Certified Teachers
              </h1>
            </div>

            {/* <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div> */}
          </div>
        </div>
        <div className="flex gap-10 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer">
          <div className="relative text-emerald-700 ml-5">
            <IconVocabulary width={60} height={60} />
          </div>

          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
              Join our family
              </h1>
            </div>

            {/* <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="slider-headerone">
        <h1 className="text-xl text-white md:text5l  font-heading font-extrabold pb-6 pl-32 uppercase">
          Learning Meets Inspiration
        </h1>
        <motion.h1
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl pl-32 pb-10 font-bold text-white  slider-header"
        >
          A place where education and culture thrive together.
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            href="../Curriculum"
            className="text-white bg-emerald-600 px-8 py-4 ml-32 rounded-lg font-thin mt-44  hover:bg-amber-100 transition"
          >
            Learn More
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default EmblaCarousel;