import { useState } from "react";

import "./caraousel.scss";

import { GiPreviousButton, GiNextButton } from "react-icons/gi";

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
          <GiPreviousButton
            onClick={movePrev}
            className="caraousel__controls__btn"
          />

          <GiNextButton
            onClick={moveNext}
            className="caraousel__controls__btn"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Caraousel;
