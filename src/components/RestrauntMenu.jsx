import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import {
  swiggy_menu_api_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restmenu, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  const despatch = useDispatch();
  const AddItem = (item) => {
    despatch(addItem(item));
  };

  return !restmenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gray-700 p-2 flex gap-16  items-center justify-center">
        <img
          className="w-[300px] object-contain  rounded-md"
          src={IMG_CDN_URL + restmenu?.cloudinaryImageId}
          alt={restmenu?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="text-[45px] text-white ">{restmenu?.name}</h2>
          <p className="text-sm text-gray-300">
            {restmenu?.cuisines?.join(", ")}
          </p>
          <div className="flex gap-4">
            <div
              className="restaurant-rating"
              style={
                restmenu?.avgRating < 4
                  ? { backgroundColor: "red" }
                  : restmenu?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restmenu?.avgRating}</span>
            </div>
            <div className="text-white  ">|</div>
            <div className="text-white">{restmenu?.sla?.slaString}</div>
            <div className="text-white">|</div>
            <div className="text-white">{restmenu?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="menu-items p-2 w-2/3 m-auto">
          <div className="p-2">
            <h3 className="text-xl text-gray-600 mb-4">Recommended</h3>
            <p className="text-md font-thin text-gray-500">
              {menuItems.length} ITEMS
            </p>
          </div>
          <h1 className="text-center text-3xl font-medium">Menu</h1>
          <div>
            {menuItems.map((item) => (
              <div className="grid grid-cols-4 h-[200px] justify-between rounded-md m-2 shadow-md">
                <div className="p-2   ">
                  {item?.imageId && (
                    <img
                      className="w-[100px]  rounded-md"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <div className="ml-1">
                    <button
                      className="bg-green-300 mt-4 w-20 h-10 rounded-md hover:bg-green-500 font-normal"
                      onClick={() => {
                        AddItem(item);
                      }}
                    >
                      Add +
                    </button>
                  </div>
                </div>
                <div className="col-span-2 p-4">
                  <h3 className="text-2xl font-medium ">{item?.name}</h3>
                  <p className="text-black">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="text-sm mt-4 font-thin text-gray-600 ">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
