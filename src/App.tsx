import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./components/layout/NotFound";
import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./AtuhContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute redirectPath="/">
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
