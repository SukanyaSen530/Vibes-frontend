import { Outlet } from "react-router-dom";
import { Navbar, SidebarMain } from "../../components";

import "./home.scss";

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <section className="home__content flex">
        <SidebarMain />
        <div className="home__content--item flex-1">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Home;
