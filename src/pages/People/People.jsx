import "./people.scss";

import { follow } from "../../dummy";

import { UserCard } from "../../components";

const People = () => {
  return (
    <section className="people">
      <div>
        {Array(5)
          .fill(0)
          .map((e, index) => (
            <article className="profile-card m-6" key={index}>
              <figure className="avatar avatar-sm cursor-pointer">
                <img
                  className="avatar-img"
                  src={follow.avatar}
                  alt="useravatar"
                />
              </figure>
              <div>
                <p className="text-2xl text-left leading-loose">
                  {follow.userName}
                </p>
                <p className="text-xl text-left leading-loose">
                  {follow.fullName}
                </p>
              </div>
              <button className="bg-blue-400 py-2 px-4 rounded-3xl text-2xl text-white ml-auto duration-300 hover:bg-blue-600">
                Follow
              </button>
            </article>
          ))}
      </div>
    </section>
  );
};

export default People;
