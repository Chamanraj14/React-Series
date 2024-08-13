import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center w-6/12 m-auto">
        <h1 className="font-bold text-3xl shadow-md m-2 p-2  text-red-500">Cart</h1>
        <button className="border-black text-white font-medium bg-red-500 rounded-lg shadow-lg p-1 m-2 " onClick={handleClearCart}>Clear Cart</button>
        {   cartItems.length === 0 ? <h1 className="font-bold text-lg">Cart is empty <br/> Please add items</h1> : 
            cartItems.map((item) => <ItemList list={item}/>)
        }
        <div className="text-right m-2 p-2">
        <h2 className="font-semibold text-lg border-b-2">Total</h2>
        <ul className="text-base">
            {cartItems.map((item) => <li>+ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
        </ul>
        </div>
        </div>
    );
};
export default Cart;