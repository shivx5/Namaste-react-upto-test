import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Shimmer from '../Body/Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../Util/useRestaurantMenu'
import { IoIosBicycle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import RestaurantCategory from './RestaurantCategory'


function Restaurant() {
     const {resId} = useParams();
    const ResData = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState();
     
    if(ResData==null)
    {
      return <Shimmer/>
    }
    else{
      const itemGroup = ResData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      const{name,avgRating,totalRatingsString,costForTwoMessage,sla,cuisines,locality
      }=ResData?.data?.cards[2]?.card?.card.info
      const category =  ResData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>{
       return c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

      })
      return  (
        <div className='flex  flex-col gap-6' >
          <div className='flex flex-col w-1/2 justify-center gap-5 mx-auto'>
          <h1 className='font-bold text-2xl'>{name}</h1>
          <div className='p-5 border-2 border-gray-200 rounded-2xl shadow-2xl shadow-gray-400'>
          <ul className='flex flex-col gap-2' >
             <li className='font-bold'>⭐{avgRating}<span>({totalRatingsString}) .</span> <span>{ costForTwoMessage}</span></li>
             <span className='text-orange-600 font-bold underline cursor-pointer'>{cuisines.join(" ,")}</span>
             <li>{sla?.slaString}</li>
             <div className='flex gap-6'>
              <span className='font-bold '>Outlet</span>
              <span className='font-semibold text-sm flex text-gray-500 items-center gap-1 cursor-pointer'>{locality}<span className='text-orange-600'><IoMdArrowDropdown/></span></span>
              <br/>
             </div>
             <span className='font-bold'>25-30 mins</span>
             <hr/>
             <div>
              <span></span>
             </div>
            </ul>
          <div className='flex gap-4 items-center '>
            <span className='text-2xl '><IoIosBicycle/></span>
            <span className='font-semibold text-sm flex text-gray-500'>|{"⠀⠀"+sla?.lastMileTravelString}</span>
          </div>
          </div>
          
            
          </div>
          <br/>
          <span className='font-semibold text-sm text-gray-500 text-center'>M E N U</span>
          <div>
            {category?.map((value,index)=>
               <RestaurantCategory  key={index} data={value.card.card} showItem={index ===showIndex?true:false} setShowIndex={()=> {setShowIndex(index);}}/>
              )}
          </div>
         
          
         
            
        </div>
      )
    }
 
}

export default Restaurant
