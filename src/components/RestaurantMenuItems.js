import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuItems = ({data, showItems, setShowIndex}) => {
    console.log( "data" , data);
    const {title} = data;
    const Items = data?.itemCards;
    //const [showItems, setShowItems] = useState(false); //state controlled by every child by themselves
    const handleClick = () => {
        console.log("clicked");
        //setShowItems(!showItems);
        setShowIndex();
    }
return (
    <div>
    {/** header */}
    <div className="w-6/12 mx-auto my-2 p-2 bg-gray-50 shadow-lg cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                <span className="font-medium text-lg text-red-500 " >{title} ({data.itemCards.length})</span>
                <span> 🔻 </span>
                </div>
                {showItems && <div className="text-left border-b-2">
                {Items.map((item) => (<ItemList list={item}/>))}
                </div>}
                
    </div>
        
    {/** body */}
    
    {/* <div>Body</div> */}
    </div>
);

}
export default RestaurantMenuItems;