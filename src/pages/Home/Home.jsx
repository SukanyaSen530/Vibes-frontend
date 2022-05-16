import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components";

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <section className="home__content flex">
        <Sidebar />
        <div className="home__content--item">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Home;
