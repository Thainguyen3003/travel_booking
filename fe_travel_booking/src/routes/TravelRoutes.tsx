import { lazy } from "react";
import Home from "../pages/travel/Home";
import Hotel from "../pages/travel/Hotel";

const travelRoutes = [
  {
    path: "/travel/home",
    component: <Home />,
  },
  {
    path: "/travel/hotel",
    component: <Hotel />,
  },
];

export default travelRoutes;
