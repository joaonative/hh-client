import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import SideBar from "./components/layout/SideBar";
import "./index.css";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <div className="flex flex-row gap-2 bg-background w-screen h-screen">
      <Router>
        <SideBar>
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
