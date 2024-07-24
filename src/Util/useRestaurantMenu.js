import { useEffect, useState } from "react";
import axios from "axios";
const useRestaurantMenu = (resId) =>
{
const[ResData,setResData] =useState();
useEffect(()=>
{
   fetchData();
},[])

async function fetchData() {
    try {
      const res = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
      setResData(res?.data);

    } catch (error) {
      console.error(error);
    }
  }

return ResData;
}
export default useRestaurantMenu;