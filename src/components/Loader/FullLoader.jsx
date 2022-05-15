import { loaderLarge } from "../../assets/images";

import "./full-loader.scss";

const FullLoader = () => {
  return (
    <section className="full-loader fixed top-0 bottom-0 right-0 left-0 bg-gray-100/[0.3]">
      <div className="full-loader__content">
        <img
          src={loaderLarge}
          alt="loader_image_large"
          className="rounded-full"
        />
        <p className="full-loader__content__text font-bold text-5xl text-black">
          Loading....
        </p>
      </div>
    </section>
  );
};

export default FullLoader;
