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
import React, { Suspense, lazy } from "react";
import Shimmer from "./components/shimmer";

import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUS from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/cart";
// import Instamart from "./components/Instamart";

// Header component is functional component

//Config driven

//never try to use index key

//App Layout
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </Provider>
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
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
