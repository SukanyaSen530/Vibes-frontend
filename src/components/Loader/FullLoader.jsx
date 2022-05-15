import { loaderLarge } from "../../assets/images";

import "./full-loader.scss";

const FullLoader = () => {
  return (
    <section className="full-loader">
      <div className="full-loader__content">
        <img
          src={loaderLarge}
          alt="loader_image_large"
          className="full-loader__content__image"
        />
        <p className="full-loader__content__text">Please wait!</p>
      </div>
    </section>
  );
};

export default FullLoader;
