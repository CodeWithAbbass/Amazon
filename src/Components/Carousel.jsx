import { useEffect } from "react";
import "../Css/Carousel.css";
import { Link } from "react-router-dom";

const Carousel = ({ UniqueClass, CarouselItems, Heading }) => {
  let counter = 0;
  const NextGroup = (num) => {
    if (window.innerWidth > 768) {
      let TimeID;
      clearTimeout(TimeID);
      if (num === 1) {
        let check = counter + 8;
        if (check < CarouselItems.length - 7) {
          counter += 8;
        } else {
          counter = CarouselItems.length - 8;
          TimeID = setTimeout(() => {
            counter = CarouselItems.length - 8.8;
            CarouselSlide();
          }, 500);
        }
      } else {
        let check = counter - 8;
        if (check > 0) {
          counter -= 8;
        } else {
          counter = 1;
          TimeID = setTimeout(() => {
            counter = 0;
            CarouselSlide();
          }, 500);
        }
      }
      CarouselSlide();
    }
  };
  const MobileNextGroup = (num) => {
    if (window.innerWidth <= 768) {
      let TimeID;
      clearTimeout(TimeID);
      if (num === 1) {
        if (counter < CarouselItems.length - 1) {
          counter += 1;
        } else {
          counter = CarouselItems.length - 0.9;
          TimeID = setTimeout(() => {
            counter = CarouselItems.length - 1;
            MobileCarouselSlide();
          }, 500);
        }
      } else {
        let check = counter - 1;
        if (check > 0) {
          counter -= 1;
        } else {
          counter = 1;
          TimeID = setTimeout(() => {
            counter = 0;
            MobileCarouselSlide();
          }, 500);
        }
      }
      MobileCarouselSlide();
    }
  };
  const CarouselSlide = () => {
    const CarouselItem = document.querySelectorAll(`.${UniqueClass}`);
    if (window.innerWidth > 768) {
      CarouselItem.forEach((item, index) => {
        item.style.left = `${index * 12}%`;
        item.style.transform = `translateX(-${counter * 100}%)`;
      });
    }
  };
  const MobileCarouselSlide = () => {
    const MobileCarouselItem = document.querySelectorAll(
      `.Mobile${UniqueClass}`
    );
    if (window.innerWidth <= 768) {
      MobileCarouselItem.forEach((item, index) => {
        item.style.left = `${index * 100}%`;
        item.style.transform = `translateX(-${counter * 100}%)`;
        item.style.width = `100%`;
      });
    }
  };
  useEffect(() => {
    return () => {
      MobileCarouselSlide();
      CarouselSlide();
    };
  }, []);
  return (
    <div className="Carousel">
      <h2 className="Carousel_Heading">{Heading}</h2>
      <div className="Carousel_Container Desktop_Carousel">
        <button className="Carousel_LeftBtn" onClick={NextGroup}>
          <span className="LeftBtn_inner">❮</span>
        </button>
        <div className="Carousel_Item_Container">
          {CarouselItems.length <= 0
            ? ""
            : CarouselItems.map((item, index) => {
                let { link, Image } = item;
                return (
                  <Link
                    className={`Carousel_Item ${UniqueClass}`}
                    to={link}
                    key={index}
                  >
                    <img src={Image} alt="Books" className="Carousel_Img" />
                  </Link>
                );
              })}
        </div>
        <button className="Carousel_RightBtn" onClick={() => NextGroup(1)}>
          <span className="RightBtn_inner">❯</span>
        </button>
      </div>

      <div className="Carousel_Container Mobile_Carousel">
        <button className="Carousel_LeftBtn" onClick={MobileNextGroup}>
          <span className="LeftBtn_inner">❮</span>
        </button>
        <div className="Carousel_Item_Container">
          {CarouselItems.length <= 0
            ? ""
            : CarouselItems.map((item, index) => {
                let { link, Image } = item;
                return (
                  <Link
                    className={`Carousel_Item Mobile${UniqueClass}`}
                    href={link}
                    key={index}
                  >
                    <img src={Image} alt="Books" className="Carousel_Img" />
                  </Link>
                );
              })}
        </div>
        <button
          className="Carousel_RightBtn"
          onClick={() => MobileNextGroup(1)}
        >
          <span className="RightBtn_inner">❯</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
