import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import brand_Logo from "../Images/brand_Logo.png";
const Title = () => {
  return (
    <Link to={"/"}>
      <img className="h-24 px-2 sm:w-full" alt="Logo" src={brand_Logo}></img>
    </Link>
  );
};
const HeaderComponent = () => {
  const [logedin, setLogedIn] = useState("true");
  const isonline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg rounded-md">
      <Title />
      {/* <h1>Nothing Before Food</h1> */}
      <div className="flex flex-row justify-center items-center font-">
        <ul className="flex py-10 font-medium text-sm text-gray-700 mr-12">
          <Link className="link" to={"/"}>
            <li className="px-2">Home</li>
          </Link>

          <Link className="link" to={"/about"}>
            <li className="px-2">About Us</li>
          </Link>

          <Link className="link" to={"/contact"}>
            <li className="px-2">Contacts </li>
          </Link>

          <Link className="link" to={"/cart"}>
            <li className="px-2">Cart</li>
          </Link>
          <Link className="link" to={"/instamart"}>
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
        {logedin === "true" ? (
          <button
            className="p-2 rounded-lg  font-medium text-sm text-gray-700"
            onClick={() => {
              setLogedIn("false");
            }}
          >
            Log In
          </button>
        ) : (
          <button
            className="p-2 rounded-lg  font-medium text-sm text-gray-700"
            onClick={() => {
              setLogedIn("true");
            }}
          >
            Log Out
          </button>
        )}
        <h2 className="mr-2">{isonline ? "🟢" : "🔴"}</h2>
      </div>
      {/* <div className="flex flex-row items-center">
        <div className="w-20 ">
          <img
            className="rounded"
            src="https://p7.hiclipart.com/preview/442/17/110/computer-icons-user-profile-male-user.jpg"
            alt="profile"
          />
        </div>
        <div className=" p-2 flex flex-col">
          <h1 className=" text-sm  uppercase">{user.name}</h1>
          <h1 className="text-sm uppercase ">{user.email}</h1>
        </div>
      </div> */}
      {/* <div className="flex justify-center items-center mr-10">
        {logedin === "true" ? (
          <button
            onClick={() => {
              setLogedIn("false");
            }}
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() => {
              setLogedIn("true");
            }}
          >
            Log Out
          </button>
        )}
        <h2 className="px-2">{isonline ? "🟢" : "🔴"}</h2>
      </div> */}
    </div>
  );
};

export default HeaderComponent;
