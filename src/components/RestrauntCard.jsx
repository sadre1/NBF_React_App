import { IMG_CDN_URL } from "../config";
import { FaStar } from "react-icons/fa";

const RestrutentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  // const { image, name, cuesene, rating } = restaruant;
  console.log("cuses", cuisines);
  return (
    <div className="flex flex-col p-2 m-3 w-64  shadow-lg rounded-lg bg-pink-100 hover:bg-pink-200">
      <div className="w-30 h-30">
        <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <h2 className="font-bold text-lg text-gray-800">{name}</h2>
      <div>
        <h5 className="font-medium text-[12px] pb-2 my-2">
          {cuisines.join(", ")}
        </h5>
      </div>
      <div className="flex  space-x-2">
        <div
          className={`flex flex-row items-center text-white text-center ${
            avgRatingString < 4
              ? "bg-red-500 rounded-lg w-[50px]"
              : "  bg-green-600 rounded-md w-[50px]"
          }`}
        >
          <div className="p-1">
            <FaStar color="white" />
          </div>
          <div className="font-bold">
            {" "}
            <h1>{avgRatingString}</h1>
          </div>
        </div>

        <div
          className="flex flex-row items-center
          space-x-1 "
        >
          <div>
            <h4 className="text-gray-700 text-lg">•</h4>
          </div>
          <h4 className="font-semibold text-sm">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </h4>
          <div>
            <h4 className="text-gray-700 text-lg">• </h4>
          </div>
          <h4 className="font-semibold text-sm">
            {costForTwo ?? "₹200 for two"}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default RestrutentCard;
