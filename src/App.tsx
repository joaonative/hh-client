import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectPath="/login">
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
