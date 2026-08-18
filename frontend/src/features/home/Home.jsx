import "./Home.css";

import HomeSidebar from "./HomeSidebar";
import ChatAgent from "./ChatAgent";
import SmartResult from "./SmartResult";

function Home() {
  return (
    <main className="home-page">
      <div className="home-layout">

        <HomeSidebar />

        <section className="home-content">
          <ChatAgent />
          <SmartResult />
        </section>

      </div>
    </main>
  );
}

export default Home;
