import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Restaurant from "./components/Restaurant/Restaurant";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Body/Shimmer";
import {UserContext} from "./Util/UserContext";
import { Provider } from "react-redux";
import AppStore from "./Util/AppSrote";
import Cart from "./components/Body/Cart";
const Grocery = lazy (()=> import("./components/Grocery"))
const AppLayout =()=>{
    const [userName,setUserName] =useState()
    useEffect(()=>
    {
       // Api to get username
       const data = {
        name:"shiva"
       }
       setUserName(data.name);
    },[])
    return (
        <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="flex flex-col gap-6">
            <Header />
            <div >
            <Outlet/>    
            </div>
           
        </div>
        </UserContext.Provider>
        </Provider>
)
} 
export const AppRoute = createBrowserRouter([
        
    {
        path:"/",element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",element:<Body />
            },
            {
                path:"/about",element:<About/>
            },
            {
                path:"/contact",element:<Contact/>
            },
            {
                path:"/restaurant/:resId",element:<Restaurant/>
            },
            {
                path:"/grocery",element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/cart",element:<Cart/>
            }
        ]
    }
    ])
export default AppLayout;