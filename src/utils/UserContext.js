const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser : "Default User",
}) //Global Context to prevent props drilling

export default UserContext;