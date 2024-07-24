import { useContext, useState } from "react";
import { LOGO_URL } from "../../Util/ImageContent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Util/useOnlineStatus";
import { BsWifi } from "react-icons/bs";
import { TbWifiOff } from "react-icons/tb";
import { useSelector } from 'react-redux'
import { PiShoppingCartSimpleLight } from "react-icons/pi";

import {UserContext} from "../../Util/UserContext";


const Header= () => {
    const [buttonName,setButtonName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const contextData = useContext(UserContext);
    const cartItem = useSelector((store)=> {
        console.log(store)
        return store.cart.Items
    } );

                        
   return (
      <div className="flex justify-around items-center w-100 p-4   mt-3  text-md ">
          <div className="flex flex-1 justify-center  items-center">
          <img className="w-16 " src={LOGO_URL}></img>
          </div>
          <div className=" flex-2 grow  ">
              <ol className="flex justify-around">
                  <li className=" hover:text-yellow-400" ><Link to="/">Home</Link></li>
                  <li className=" hover:text-yellow-400"><Link to="/contact">Contact</Link></li>
                  <li className=" hover:text-yellow-400"><Link to="/about">About</Link></li>
                  <li className=" hover:text-yellow-400 "><Link to="/cart" className="flex gap-2 items-center">
                  <div className='flex relative'>
                  <span className="text-green-600 text-3xl"><PiShoppingCartSimpleLight/></span>
                  <span className="text-[9px] font-bold absolute left-[.85rem]  top-[.44rem]"> {cartItem.length}</span>
                 </div></Link></li>
                 <li className=" hover:text-yellow-400 "><Link to="/grocery" >Grocery</Link></li>
                  <li className="flex gap-3 items-center">Network {onlineStatus ?<span className=" text-green-500"> <BsWifi/></span>:<span className=" text-red-500"><TbWifiOff/></span>}</li>
              </ol>
          </div>
          <div className="flex  flex-1 gap-10 justify-center ">
               <button className="bg-green-600 hover:cursor-pointer text-white  font-light py-1 px-5 rounded-full" onClick={()=>{setButtonName("Logout");console.log(setButtonName)}}>{buttonName}</button> 
              {/* <span className="font-bold">{contextData.loggedInUser}</span> */}
          </div>
      </div>
      
    )
  }
  export default Header;