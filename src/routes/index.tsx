/** @format */

import App from "@/App";
import Dashboard from "@/components/modules/Dashboard/Dashboard";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";

import Login from "@/pages/Login";
import Register from "@/pages/Register";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "",
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: FAQ,
        path: "faq",
      },
    ],
  },
  {
    Component: Login,
    path: "login",
  },
  {
    Component: Register,
    path: "register",
  },
  {
    Component: Dashboard,
    path: "dashboard",
    children: [
      {
        Component: Dashboard,
        path: "",
      },
    ],
  },
  // {
  //   Component: DriverDashboard,
  //   path: "driver-dashboard",
  // },
  // {
  //   Component: AdminDashboard,
  //   path: "admin-dashboard",
  // },
]);
