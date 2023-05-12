import { useEffect } from "react";
import "../Css/MainSlider.css";

const MainSlider = ({ SlideArr }) => {
  let slideIndex = 0;
  let setTimeOutID;

  const pushSlides = (num) => {
    const Slides = document.querySelectorAll(".mySlide");
    if (num == -1) {
      if (slideIndex < 2) {
        slideIndex = Slides.length - 1;
      } else {
        slideIndex -= 2;
      }
    }
    clearTimeout(setTimeOutID);
    SliderFunc(3000);
  };

  const SliderFunc = (delay) => {
    const Slides = document.querySelectorAll(".mySlide");
    for (let i = 0; i < Slides.length; i++) {
      Slides[i].classList.remove("prev");
      Slides[i].classList.remove("active");
      Slides[i].classList.remove("next");
    }
    slideIndex = slideIndex > Slides.length - 1 ? 0 : slideIndex;

    if (slideIndex < Slides.length - 1) {
      Slides[slideIndex + 1].classList.add("next");
    } else {
      Slides[0].classList.add("next");
    }
    Slides[slideIndex].classList.add("active");
    if (slideIndex > 0) {
      Slides[slideIndex - 1].classList.add("prev");
    } else {
      Slides[Slides.length - 1].classList.add("prev");
    }
    slideIndex++;
    setTimeOutID = setTimeout(() => {
      SliderFunc(delay);
    }, delay);
  };

  useEffect(() => {
    SliderFunc(3000);
    return () => {
      clearTimeout(setTimeOutID);
    };
  }, []);
  return (
    <div className="MainSlider">
      {SlideArr.length < 1
        ? ""
        : SlideArr.map((item, index) => {
            return (
              <div className="mySlide " key={index}>
                <img src={item} alt="Amazon Banner" />
              </div>
            );
          })}
      <a className="prevBtn" onClick={() => pushSlides(-1)} tabIndex={30}>
        <span className="prevBtn_inner">❮</span>
      </a>
      <a className="nextBtn" onClick={() => pushSlides(1)} tabIndex={31}>
        <span className="nextBtn_inner">❯</span>
      </a>
    </div>
  );
};

export default MainSlider;
