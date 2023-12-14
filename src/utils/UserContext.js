import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sadrealam Ahmed",
    email: "fashel3939@gmail.com",
  },
});
export default UserContext;
