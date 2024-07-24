import { TiStarHalfOutline } from "react-icons/ti";
import { CDN_URL } from "../../Util/ImageContent.js";
import { useDispatch } from "react-redux";
import { addItem } from "../../Util/CartSlice.js";
const ItemCard= ({data})=>
{
    const {name,price,description,ratings,imageId}=data?.card?.info;
    const dispatch = useDispatch();
    const handleAddDataStore =(data)=>
    {
        dispatch(addItem(data));
    }
    
return(
    <div className="flex  justify-between mb-6 p-4 ">
        <div className="flex flex-col gap-1 flex-1 w-3/4">
             <span className="text-gray-700 font-bold text-lg">{name}</span>
             <span className="font-bold">₹ {price/100}</span>
             <span className="text-green-800 flex gap-1 items-center font-bold" ><span><TiStarHalfOutline/></span>{ratings.aggregatedRating.rating}({ratings.aggregatedRating.ratingCountV2})</span>
             <span className="whitespace-nowrap text-ellipsis overflow-hidden">{description}</span>
        </div>

        <div className=" w-1/4 flex flex-col justify-center ">
            <img src={CDN_URL+imageId} className=" h-36 w-40 relative  rounded-lg"></img>
            <span className="text-green-700 px-5 py-1 mr-3 text-center cursor-pointer rounded-lg bg-white font-bold  z-10 " onClick={()=>{handleAddDataStore(data)}}>Add</span>
        </div>
       
       
    </div>
)
}
export default ItemCard;