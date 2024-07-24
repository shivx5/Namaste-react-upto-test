import { CDN_URL } from "../../Util/ImageContent";
import { IoLocationOutline } from "react-icons/io5";
const Card = (props) =>
    {
    
        return (
            <div className="flex flex-col  w-72 p-4 m-2   gap-1 whitespace-nowrap overflow-hidden text-ellipsis  relative " >
              <div >
              <img  className="h-44  w-[100%] rounded-xl contrast-150"  src={CDN_URL+props?.EachData?.info.cloudinaryImageId}></img>
              </div>

              <span className="font-bold text-2xl absolute top-[9.5rem] left-[2rem] text-white">{props?.EachData?.info.aggregatedDiscountInfoV2.header}</span>
                    <span className="font-bold text-lg">{props?.EachData?.info.name}</span>
                            <span className="font-bold">⭐ {props?.EachData?.info.avgRating}<span>{".⠀"+props?.EachData?.info.sla.slaString
                            } </span> </span>
                            
                        <span >{props?.EachData?.info.cuisines.join(', ')} </span>
                        <span className="flex items-center gap-3">{props?.EachData?.info.locality}<span className="text-green-600"><IoLocationOutline/></span></span>
                </div>
        )
    }

   export  const HigherOrderCard =(Card)=>
    {
        return(props)=>
        {
            return(
                <div className="relative">
                <p className="bg-black text-white absolute top-4 left-6 z-10 ">promoted</p>
                <Card {...props}/>
                </div>
            )
           
        }
    }
    export default Card;