import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import React from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory =({data,showItem,setShowIndex}) =>
{
   const[showSingleItem,setShowSingleItem] = useState(false);

    return(
        <div className=" flex flex-col w-1/2 justify-center mx-auto gap-2  ">
            <div className="h-14 font-bold flex items-center justify-between text-xl p-4 cursor-pointer" onClick={()=> {
                setShowIndex();setShowSingleItem(!showSingleItem)}}>
            <span className="">{data.title} ({data?.itemCards?.length})</span>
            <span className="">{showSingleItem&&showItem?<IoIosArrowUp/>:<IoIosArrowDown/>}</span>
            </div>
          
            <div >
                {showSingleItem&&showItem&&data?.itemCards?.map((c,index)=>
                    {
                        return  <ItemCard data={c} key={index}/>
                    }
                )}
            </div>
            <div className="h-4 bg-gray-100 ">

            </div>
        </div>
    )
}
export default RestaurantCategory;