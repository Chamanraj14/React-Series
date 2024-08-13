import ResContainer,{withOpenLabel} from "./ResContainer";
import { useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineLayout from "./OfflineLayout";
import UserContext from "../utils/UserContext";
const Body = () => { // Body react component
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantOpen = withOpenLabel(ResContainer);
    useEffect(() => {fetchData()}, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };
    if(listOfRestaurants.length === 0){
        return <Shimmer/>;
    }
    if(onlineStatus === false){
        return <OfflineLayout/>;
    }
    const {loggedInUser, setUserName} = useContext(UserContext)
    return (
        <div className="body">
        <div className="flex justify-items-start">
        <div className="px-3 py-3">
            <input type="text" className="border border-black border-solid rounded-md" value={searchText} onChange={(p) =>{setSearchText(p.target.value)}} />  
            {/* p is event in this case */} {/* the searchText inside the value is for displaying the search text string and the onChange event handler is for taking the input*/}
            <button className="bg-red-500 px-1 border border-black text-white rounded-sm" onClick={()=>{
            const filterSearchedRest = listOfRestaurants.filter((res)=>{
                return (res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            })
            setFilteredRestaurant(filterSearchedRest);

            console.log(searchText);
            }}>Search</button>
        </div>

        <div className="px-3 py-3">
            <button className="bg-red-500 px-1 border border-black text-white rounded-sm" onClick = {() => {
                const filteredRestaurants = listOfRestaurants.filter(
                    (rest) => {
                        return (rest.info.avgRating >= 4.3);
                    }
                );
                //console.log(filteredRestaurants);
                setFilteredRestaurant(filteredRestaurants);
            }}>Top Rated Resturants</button>
        </div>

        <div className="px-3 py-3">
            <label>Set User Name : </label>
            <input className="border border-black border-solid rounded-md" value = {loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>

        </div>
        
        
        <div className="flex flex-wrap" >
            {filteredRestaurant.map((resturant) => (
                <Link key={resturant.info.id} to={"/restaurant/"+resturant.info.id}>{resturant.info.isOpen ? <RestaurantOpen resData={resturant}/> : <ResContainer  resData={resturant}/>}</Link>
            ))}
        </div>

        </div>
    )
}
export default Body; 