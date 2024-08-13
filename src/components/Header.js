import { LOGO_LINK } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => { // Header react component
    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-red-500 shadow-lg">
        <div className="logo-container">
            <img className="w-24 p-3 border-r-4 shadow-lg" src={LOGO_LINK}/>
        </div>
        <div className="flex items-center">
            <ul className="flex ">
                <li className="px-5 text-white ">Online Status : {(onlineStatus)? "🟢" : "🔴"} </li>
                <li className="px-5  text-white"><Link to="/">Home</Link></li>
                <li className="px-5  text-white"><Link to="/about">About us</Link></li>
                <li className="px-5  text-white"><Link to="/contact">Contact us</Link></li>
                <li className="px-5  text-white font-semibold"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
                <li className="px-5  text-white">User : {loggedInUser}</li>
                <button className=" w-20 px-2 mr-5 text-red-500 border border-white rounded-sm shadow-lg bg-white" onClick={()=>{btnLogin==="Login" ? setBtnLogin("Logout"):setBtnLogin("Login");}}>{btnLogin}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;