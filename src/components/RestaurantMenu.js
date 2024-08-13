import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
//import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuItems from "./RestaurantMenuItems";
const RestaurantMenu = () => {
    //const[resInfo,setResInfo]=useState(null);
    const {resId} = useParams(); //returns object with resId passed in the dynamic routing path in app.js
    console.log("parameters:" , useParams());
    const [showIndex, setShowIndex] = useState(null);

    // useEffect(()=>{
    //     FetchMenuData();
    // },[]);
    // const FetchMenuData = async () =>{
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json);
    // }; these works are done by useRestaurantMenu custom hook with only one parameter resId obtained from useParams() hook which make the code look clean
    const resInfo = useRestaurantMenu(resId)
    if (resInfo===null) return <Shimmer/> ;
    const {name, cuisines, avgRatingString, locality, feeDetails} = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(itemCards);
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    console.log(categories);
    return (
        <div className="text-center">
        <h1 className="font-bold text-3xl shadow-md m-2 p-2  text-red-500">{name}</h1>
        <h2 className=" font-semibold text-xl text-red-500 ">Menu</h2>
        <h3 className="font-medium p-1"> CUISINES TYPE : {cuisines.join(",")}</h3>
        <h3 className="font-medium  p-1">Average Rating : {avgRatingString} ⭐</h3>
        <h3 className="font-medium p-1">Area : {locality}</h3>
        {categories.map((category, index) => (
            <RestaurantMenuItems data={category?.card?.card} showItems = {index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/> 
        ))}
        </div>
    );
}
export default RestaurantMenu;