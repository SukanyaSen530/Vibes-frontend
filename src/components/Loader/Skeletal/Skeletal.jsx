import { Fragment } from "react";
import "./skeletal.scss";

const Skeletal = ({ type, num = 3 }) => {
  let card = null,
    content = null;

  if (type === "user") {
    card = (
      <div className="w-full h-28 border-2 rounded-md p-4 mx-auto my-4">
        <div className="flex animate-pulse items-center h-full space-x-5">
          <div className="w-20 h-20 bg-gray-400  rounded-full "></div>
          <div className="flex flex-col space-y-3 flex-1">
            <p className="w-full bg-gray-400 h-8 rounded-md "></p>
            <p className="w-1/2 bg-gray-400 h-8 rounded-md "></p>
          </div>
        </div>
      </div>
    );
  } else if (type === "post") {
    card = (
      <div className="post-skeletal border-2 rounded-2xl p-4 mx-auto my-4">
        <div className="flex animate-pulse items-center h-full space-x-5">
          <div className="w-20 h-20 bg-gray-400  rounded-full "></div>
          <div className="flex flex-col space-y-3 flex-1">
            <p className="w-full bg-gray-400 h-8 rounded-md "></p>
            <p className="w-1/2 bg-gray-400 h-8 rounded-md "></p>
          </div>
        </div>
        <div className="post-skeletal__body animate-pulse bg-gray-400 mt-4"></div>
      </div>
    );
  } else if (type === "single_post") {
    card = (
      <div className="single-post-skeletal h-full w-full">
        <div className="p-8 flex h-full gap-6 flex-col sm:flex-row">
          <div className="flex items-center justify-center">
            <div>
              <div className="single-post-skeletal__body animate-pulse bg-gray-400 mt-4"></div>
              <p className="w-full bg-gray-400 h-10 mt-6 rounded-md "></p>
            </div>
          </div>
          <div className="basis-3/5 rounded-2xl my-auto">
            <div className="flex animate-pulse items-center space-x-5 mb-8">
              <div className="w-20 h-20 bg-gray-400  rounded-full "></div>
              <div className="flex flex-col space-y-3 flex-1">
                <p className="w-full bg-gray-400 h-8 rounded-md "></p>
                <p className="w-1/2 bg-gray-400 h-8 rounded-md "></p>
              </div>
            </div>
            <div className="h-full flex flex-col gap-6">
              <p className="w-full bg-gray-400 h-28 rounded-md "></p>
              <p className="w-full bg-gray-400 h-10 rounded-md "></p>
              <p className="w-full bg-gray-400 h-8 rounded-md "></p>
              <p className="w-full bg-gray-400 h-28 rounded-md "></p>
              <p className="w-full bg-gray-400 h-10 rounded-md "></p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    card = <div className="image-skeletal animate-pulse bg-gray-400"></div>;
  }

  content = Array(num)
    .fill(0)
    .map((ele, index) => <Fragment key={index}>{card}</Fragment>);

  return <>{content}</>;
};

export default Skeletal;
