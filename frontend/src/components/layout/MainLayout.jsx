import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

function MainLayout() {
  return (
    <div className="app">

      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;
