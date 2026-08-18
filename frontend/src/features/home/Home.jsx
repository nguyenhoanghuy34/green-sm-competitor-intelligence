import "./Home.css";

import ChatAgent from "./ChatAgent";
import SmartResult from "./SmartResult";

function Home() {
  return (
    <div className="home-content">

      <ChatAgent />

      <SmartResult />

    </div>
  );
}

export default Home;