/**
 * Header
 *  -Logo
 *  -Nav Items(Right Sided shifted)
 *  -cart
 * Body
 *    -search bar
 *    -RestrauntList
 *      -RestrauntCard(LOTS OF RESTO CARTS)
 *          -Images
 *          -Name
 *          -Rating
 *          -Cusines
 * Footer
 * -Links
 * -Copyright
 */
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUS from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";

// Header component is functional component

//Config driven

//never try to use index key

//App Layout

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/restaurent/:id",
    element: <RestaurantMenu />,
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
