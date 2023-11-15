import { useState } from "react";
import { resturentList } from "../config";
import RestrutentCard from "./RestrauntCard";

function filterdata(searchText, restruants) {
  const filterdata = restruants.filter((restruant) =>
    restruant.name.includes(searchText)
  );
  return filterdata;
}

const BodyComponent = () => {
  const [searchText, setSearchText] = useState(""); //Return array[variable name , seting variable function]
  const [restruant, setRestruant] = useState(resturentList);
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
          return <RestrutentCard {...resturant} key={index} />;
        })}
      </div>
    </>
  );
};
export default BodyComponent;
