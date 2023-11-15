// import { IMG_CDN_URL } from "../config";

const RestrutentCard = ({ image, name, cuesene, rating }) => {
  // const { image, name, cuesene, rating } = restaruant;
  return (
    <div className="card">
      <img src={image} alt="restruant images"></img>
      <h2>{name}</h2>
      <h3>{cuesene.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};
export default RestrutentCard;
