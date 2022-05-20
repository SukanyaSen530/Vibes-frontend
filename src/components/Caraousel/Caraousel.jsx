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
      <img
        src={images[numOfSlides]}
        alt="post-photos"
        className="caraousel__image"
      />
      {images?.length > 0 ? (
        <div className="caraousel__controls">
          <GrFormPrevious
            onClick={movePrev}
            className="caraousel__controls__btn bg-blue-300 hover:bg-blue-400 duration-200 border-2"
          />

          <GrFormNext
            onClick={moveNext}
            className="caraousel__controls__btn bg-blue-300 hover:bg-blue-400 duration-200 border-2"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Caraousel;
