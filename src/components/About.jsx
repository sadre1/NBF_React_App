import { Outlet } from "react-router-dom";

const AboutUS = () => {
  return (
    <>
      <div className="About Us">
        <h1>Sadrealam Ahmed</h1>
        <p>i am best software developer</p>
        <h2>fasehl3939@gmail.com</h2>
        <Outlet />
      </div>
    </>
  );
};
export default AboutUS;
