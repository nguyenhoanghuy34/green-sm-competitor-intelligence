import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import WorkspaceLayout from "./features/workspace/WorkspaceLayout";

import Home from "./features/home/Home";
import Dashboard from "./features/dashboard/Dashboard";

import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* Home Workspace */}
          <Route path="/home" element={<WorkspaceLayout />}>

            <Route
              path="chat-with-agent"
              element={<Home />}
            />

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

          </Route>

          {/* Other pages */}
          <Route
            path="/news"
            element={<News />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          {/* Default */}
          <Route
            path="/"
            element={
              <Navigate
                to="/home/chat-with-agent"
                replace
              />
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;