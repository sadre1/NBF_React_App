import { useState, useEffect } from "react";

import { resturentList, swiggy_api_URL } from "../config";
import RestrutentCard from "./RestrauntCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/Helper";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState(""); //Return array[variable name , seting variable function]
  const [AllRestruant, setAllRestruant] = useState([]);
  const [Filteredrestruant, setFilteredRestruant] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      setAllRestruant(resData);
      setFilteredRestruant(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // if (Filteredrestruant.length === 0) return <h1>No Restaurent Found</h1>;
  return AllRestruant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-2 shadow-lg">
        <input
          type="text"
          className="p-2 text-black rounded-md focus:bg-green-50"
          placeholder="searchRestraunt"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="px-3 py-2 m-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800 "
          onClick={() => {
            const data = filterdata(searchText, AllRestruant);
            setFilteredRestruant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center bg-pink-50">
        {Filteredrestruant.map((resturant, index) => {
          return (
            <Link className="link-card" to={"/restaurent/" + resturant.info.id}>
              <RestrutentCard {...resturant.info} key={resturant.info.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default BodyComponent;
