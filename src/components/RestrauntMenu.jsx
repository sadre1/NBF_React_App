import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import {
  swiggy_menu_api_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restmenu, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  return !restmenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>{restmenu?.id}</h1>
        <h2>{restmenu?.name}</h2>
        <img src={IMG_CDN_URL + restmenu?.cloudinaryImageId} />
        <h3>{restmenu?.city}</h3>
        <h3>{restmenu?.areaName}</h3>
      </div>
      <div className="menu-items">
        <h1>Menu</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
