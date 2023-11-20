import { IMG_CDN_URL } from "../config";

const RestrutentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  // const { image, name, cuesene, rating } = restaruant;
  return (
    <div className="w-56 p-5 m-3 shadow-lg bg-pink-100 hover:bg-pink-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="m-2 font-bold text-xl">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};
export default RestrutentCard;
