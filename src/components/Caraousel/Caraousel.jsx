import { useState } from "react";

import "./caraousel.scss";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Caraousel = ({ images = [] }) => {
  const [numOfSlides, setNumOfSlides] = useState(0);

  const movePrev = () => {
    if (numOfSlides === 0) setNumOfSlides(images?.length - 1);
    else setNumOfSlides((slideNum) => (slideNum - 1) % images?.length);
  };

  const moveNext = () => {
    setNumOfSlides((slideNum) => (slideNum + 1) % images?.length);
  };

  return (
    <div className="caraousel">
      {images?.map((item, index) => (
        <article
          className={`caraousel__image-container ${
            numOfSlides === index && "animate"
          }`}
          key={item.id}
        >
          <img
            src={item.secure_url}
            alt={`user_post-${index}`}
            className="caraousel__image-container__image"
          />
        </article>
      ))}

      {images?.length > 1 ? (
        <div className="caraousel__controls">
          <GrFormPrevious
            onClick={movePrev}
            className="caraousel__controls__btn bg-gray-300 hover:bg-gray-400 duration-200 border-2"
          />

          <GrFormNext
            onClick={moveNext}
            className="caraousel__controls__btn bg-gray-300 hover:bg-gray-400 duration-200 border-2"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Caraousel;
