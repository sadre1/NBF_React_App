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

// Header component is functional component

//Config driven


//never try to use index key

//App Layout
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
