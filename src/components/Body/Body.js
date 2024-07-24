import Card,{ HigherOrderCard } from "./Card";
// import Search from "./Search";
// import RestaurantList from "../../Api/Swiggy";
import { FilterButton } from "./FilterButton";
import ButtonName from "../../Util/ButtonContent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Util/useOnlineStatus";
import { CiSearch } from "react-icons/ci";

function Body ()
    {
        const [FilteredRestaurantList,setFilteredRestaurantList] = useState([])
        const [copyFilteredRestaurantList,setCopyFilteredRestaurantList] = useState([]);
        const onlineStatus = useOnlineStatus();
        const [button,setButton]= useState(false);
        const PromotedCard = HigherOrderCard(Card);
        useEffect(()=>
        {
            fetchData();
        },[])
    //    async  function fetchData()
    //     {
    //         try{
    //       const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //                     console.log(res)
    //                     setFilteredRestaurantList(res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //                     setCopyFilteredRestaurantList(res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //                     console.log(FilteredRestaurantList)
                                
    //         } catch(e){console.log(e);}
    //     }
        
       async function fetchData()
        {
          await  axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING').then(res =>
            { 
                setFilteredRestaurantList(res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setCopyFilteredRestaurantList(res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            }
            ).catch((err)=>{console.log(err)});
                               
        }
        function FilterByName(name)
        {
            console.log(name)
            setCopyFilteredRestaurantList(FilteredRestaurantList?.filter((res)=>
                    {
                       return res.info.avgRating > 4.5
                    } ))
        }
      
        if(onlineStatus===false)
        {
            return <h1>Check your internet connection and try again..!</h1>
        }
        return FilteredRestaurantList?.length ===0 
          ? <Shimmer/> : (
            <div className="flex flex-col gap-16 ">
                <div className="flex justify-center items-center gap-4 border-b-gray-400">
                <div>
                  { button && <input className="rounded-lg bg-green-100 focus:outline-none text-center " type="text" onChange={(e)=>{
                         setCopyFilteredRestaurantList(FilteredRestaurantList?.filter((res)=> 
                            {
                               return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());
                            })) 
                    }} />  }
                </div>
                <span  className="bg-black text-white text-2xl hover:cursor-pointer rounded-full p-2" onClick={()=>
                    {
                        setButton(!button);
                    }
                }><CiSearch/></span>
            </div> 

                   < div className="flex flex-col gap-8 ">
                   <h3 className="font-bold text-3xl mx-auto text-center">Restaurants with online food delivery in Chennai</h3>
                   <div className="flex gap-8 flex-wrap mx-auto justify-center p-[2%] ">
                    
                    {ButtonName.map((value,index)=>
                    {
                        return <FilterButton  name={value} key = {value}  FilterByName={(value)=>FilterByName(value)} />
                    })}
                
                   </div>
                   
                   <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 justify-center mx-auto ">
                   {copyFilteredRestaurantList?.map((value,index)=>
                {
                    return  <Link to={"/restaurant/"+value.info.id}  key={value.info.id}>
                        {value.info.promoted ? <PromotedCard EachData = {value} /> : <Card   EachData = {value} />}
                        
                        </Link>
                })}
                </div>
                </div>
            </div>
        )
    }
    export default Body;