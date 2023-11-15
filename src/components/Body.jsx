import { useState, useEffect } from "react";
import { resturentList, swiggy_api_URL } from "../config";
import RestrutentCard from "./RestrauntCard";

function filterdata(searchText, restruants) {
  const filterdata = restruants.filter((restruant) =>
    restruant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
}

const BodyComponent = () => {
  const [searchText, setSearchText] = useState(""); //Return array[variable name , seting variable function]
  const [restruant, setRestruant] = useState(resturentList);
  useEffect(() => {
    getRestaurent();
  }, []);
  async function getRestaurent() {
    const restruantList = await fetch(swiggy_api_URL);
    const json = await restruantList.json();
    console.log(json);
    setRestruant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return (
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
            const data = filterdata(searchText, restruant);
            setRestruant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturent-cards">
        {restruant.map((resturant, index) => {
          return <RestrutentCard {...resturant.info} key={index} />;
        })}
      </div>
    </>
  );
};
export default BodyComponent;
