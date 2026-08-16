import Header from "../common/Header";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

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