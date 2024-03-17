import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopThree from "pages/DesktopThree";
import DesktopFive from "pages/DesktopFive";
import DesktopSix from "pages/DesktopSix";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <DesktopOne />,
    },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
    {
      path: "desktopfive",
      element: <DesktopFive />,
    },
    {
      path: "desktopsix",
      element: <DesktopSix />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
