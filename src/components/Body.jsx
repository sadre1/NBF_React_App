import { useState, useEffect } from "react";
import { resturentList, swiggy_api_URL } from "../config";
import RestrutentCard from "./RestrauntCard";
import Shimmer from "./shimmer";

function filterdata(searchText, restruants) {
  const filterdata = restruants.filter((restruant) =>
    restruant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
}

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
      <div className="searchcontainer">
        <input
          type="text"
          className="searchInput"
          placeholder="searchRestraunt"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchText, AllRestruant);
            setFilteredRestruant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturent-cards">
        {Filteredrestruant.map((resturant, index) => {
          return <RestrutentCard {...resturant.info} key={index} />;
        })}
      </div>
    </>
  );
};
export default BodyComponent;
