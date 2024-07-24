import "../../../index.css"
export  const  FilterButton=(props) =>
{
    const name = props.name;
return (
     <div className="bg-gray-300 py-2 px-3 rounded-full">
        <button  className="font-semibold text-sm" onClick={()=>{props.FilterByName(name)}}>{name}</button>
     </div>
)
}