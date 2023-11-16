import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <h1>Restraunt id {id}</h1>
        <h3>alam baba biriyani</h3>
      </div>
    </>
  );
};

export default RestaurantMenu;
