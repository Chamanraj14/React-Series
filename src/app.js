import React, { useEffect, useState ,useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

//using react syntax
// const heading = React.createElement("div",{id:"parent"}, 
//     [React.createElement("div",{id:"child"},//child siblings are put into array
//     [React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h2 tag")] //child's sibling child
//     ),
//     React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h2 tag")] //child's sibling child
//     )]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

 //using JSX imp JSX is not react
// const jsxHeading = <h1>this is jsx</h1> //react element
// const head = ReactDOM.createRoot(document.getElementById("root"));
// head.render(jsxHeading);

//react functional component
// const HeadingElement = () => (
//     <h1>This is react component</h1>
// );
// const home = ReactDOM.createRoot(document.getElementById("root"));
// home.render(<HeadingElement/>);

//Food ordering app 

const Footer = () => { // Footer react component
    return (
        <div className="footer">

        </div>
    )
}
const AppLayout = () => { // AppLayout react component
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name : "Anonymous"
        }
        setUserName(data.name);
    },[]);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
        </UserContext.Provider>
        </Provider>
        
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/contact",
            element:<Contact/>,
        },
        {
            path:"/restaurant/:resId", //dynamic routing using ":"
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ],
        errorElement:<Error/>
    },  
]);

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter}/>);