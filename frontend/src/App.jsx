import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./features/home/Home";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/news" element={<News />} />

          <Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;