import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/authentication/auth-forms/AuthLogin";
import Home from "./pages/travel/Home";
import travelRoutes from "./routes/TravelRoutes";
import Mainlayout from "./layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {travelRoutes.map((route, index) => {
          const Path = route.component;
          return <Route key={index} path={route.path} element={Path} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
