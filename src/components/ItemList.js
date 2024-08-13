import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_LINK } from "../utils/constants";
const ItemList = ({list}) => {
    console.log("list" , list);
    const dispatch = useDispatch();
    const handleAddItem = (list) => {
        return dispatch(addItem(list));
    }
    return (
        <div className="flex justify-between">
        <div className=" border-b-2 p-2 w-9/12">
            <span className="font-medium">{list?.card?.info?.name} -  ₹ {list?.card?.info?.price/100 || list?.card?.info?.defaultPrice/100}/-</span>
            <p className="text-xs pt-1 pb-2">{list?.card?.info?.description}</p>
        </div>
        <div className="w-3/12">
            <img  className="shadow-lg rounded-lg" src={CDN_LINK + list?.card?.info?.imageId} alt={list?.card?.info?.name}/>
            <button className="border-black text-white font-medium bg-red-500 rounded-lg shadow-lg p-1 m-2 " onClick={() => handleAddItem(list)}>Add +</button>
        </div>
        </div>
    )
};
export default ItemList;