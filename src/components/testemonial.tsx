import { useEffect, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Star } from "lucide-react";

import Bg from "@/assets/img/Testemonial/bg.svg";
import colon from "@/assets/img/Testemonial/colon.svg";
import Title from "@/assets/img/Testemonial/title.svg";
import { testimonials } from "@/lib/constants";

import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

const Testimonial = ({ id }: { id?: string }) => {
  const totalCards = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (userInteracted) {
      const resetInteraction = setTimeout(
        () => setUserInteracted(false),
        30000
      );
      return () => clearTimeout(resetInteraction);
    }
  }, [userInteracted]);

  useEffect(() => {
    if (!userInteracted && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < totalCards - visibleCards ? prevIndex + 1 : 0
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [visibleCards, userInteracted, isHovered]);

  const handlePrev = () => {
    setUserInteracted(true);
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setUserInteracted(true);
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - visibleCards ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={id} className="relative h-full w-full overflow-hidden">
      <img
        src={Bg}
        alt="bg"
        className="z-0 h-[450px] w-full object-cover md:h-[500px] lg:h-[750px]"
      />
      <MaxWidthWrapper className="absolute inset-0 z-[1] flex h-[450px] w-full flex-col items-center justify-center md:h-[490px] lg:h-[700px] lg:gap-5">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <img src={Title} alt="Works" className="flex w-14 md:w-16 lg:w-24" />

          <div className="flex flex-col gap-3">
            <h1 className="w-full text-center font-bold text-white md:text-lg lg:text-[40px]">
              What People Say about Our
            </h1>
            <span className="w-full text-center font-bold text-white md:text-lg lg:text-[40px]">
              Organization
            </span>
          </div>
        </div>

        <div className="mx-auto my-5 h-1 w-20 bg-yellow-500" />

        <div className="relative flex w-full items-center justify-center">
          <button
            type="button"
            onClick={handlePrev}
            className="z-[2] mr-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 p-1.5 text-black hover:bg-yellow-500/85 md:size-10"
          >
            <ArrowLeft className="w-full" />
          </button>
          <div className="relative w-full overflow-hidden">
            <div
              id="carousel"
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / totalCards) * currentIndex}%)`,
                width: `${(totalCards / visibleCards) * 100}%`,
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2 transition-transform duration-300 hover:scale-95"
                  style={{ width: `${100 / visibleCards}%` }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex w-full shrink-0 items-center justify-center md:gap-5">
                    <div className="flex flex-col items-start justify-center gap-3 rounded-xl bg-[#1A3F68] p-3 text-white lg:h-[250.69px] lg:w-[380.02px] lg:gap-3 lg:p-5">
                      <div className="flex items-center justify-center gap-1 md:mt-2 lg:mt-0">
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-white/50 text-transparent lg:size-4" />
                      </div>
                      <div className="w-full text-left text-sm font-[400] text-white/50 md:text-sm lg:text-xl">
                        <img
                          src={colon}
                          alt="colon"
                          className="mb-0.5 mr-1.5 inline size-4"
                        />
                        {item.text}
                        <img
                          src={colon}
                          alt="colon"
                          className="ml-1.5 inline size-4 rotate-180"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-1.5 p-1 md:gap-3 lg:p-2">
                        <img
                          src={item.image}
                          alt=""
                          className="size-[44.9px] shrink-0 rounded-full"
                        />
                        <span className="text-xs font-semibold md:text-sm lg:text-[16px]">
                          {item.name}
                          <br />
                          <span className="text-xs font-[500] text-[#ECA30C] md:text-sm lg:text-[14px]">
                            {item.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            type="button"
            onClick={handleNext}
            className="z-[2] ml-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 p-1.5 text-black hover:bg-yellow-500/85 md:size-10"
          >
            <ArrowRight />
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonial;
