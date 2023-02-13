import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  return <h2>Home</h2>;
};

const Product = () => {
  return <h2>This is product</h2>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">First Product</Link>
            </li>
            <li>
              <Link to="/products/2">Second Product</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default App;
