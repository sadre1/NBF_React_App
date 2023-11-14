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

const Title = () => {
  return (
    <img
      className="logo"
      alt="Logo"
      src="data:image/png;base64,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"
    ></img>
  );
};
// Header component is functional component
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//config driven ui
const resturentList = [
  {
    name: "KFC",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",

    cuesene: ["fried chicken", "kfc special"],
    rating: "4.2",
  },
  {
    name: "burger King",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",

    cuesene: ["fried chicken", "kfc special"],
    rating: "4.2",
  },
  {
    name: "mec do lund",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",

    cuesene: ["fried chicken", "kfc special"],
    rating: "4.2",
  },
  {
    name: "sub way",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",

    cuesene: ["fried chicken", "kfc special"],
    rating: "4.2",
  },
];
const RestrutentCard = () => {
  return (
    <div className="card">
      <img src={resturentList[0].image}></img>
      <h2>{resturentList[0].name}</h2>
      <h3>{resturentList[0].cuesene.join(",")}</h3>
      <h4>{resturentList[0].rating} stars</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="resturentcards">
      <RestrutentCard />
      <RestrutentCard />
      <RestrutentCard />
      <RestrutentCard />
      <RestrutentCard />
      <RestrutentCard />
    </div>
  );
};
const FooterComponent = () => {
  return <h1>footerComponent</h1>;
};
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
