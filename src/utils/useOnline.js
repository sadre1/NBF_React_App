import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const handleonline = () => {
      setOnline(true);
    };
    const handleofline = () => {
      setOnline(false);
    };
    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleofline);
    return () => {
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleofline);
    };
  }, []);
  //It is Always good practice to clean the eventlistner
  return isOnline;
};
export default useOnline;
