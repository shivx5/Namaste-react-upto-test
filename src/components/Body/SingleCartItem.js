import React from 'react'

function SingleCartItem({data}) {
    const {name,price,inStock,imageId}= data?.card?.info
  return (
    <div className=' flex  justify-around items-center text-sm'>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis w-1/4 text-sm'>{name}</span>
        <span>{inStock !=0 ? <span className='border border-green-500 text-sm px-2 py-1'>available</span> : <span className='border border-red-600 text-red-500 px-2 py-1'>Unavailable</span>}</span>
        <span >₹ {Math.floor(price/100)}</span>
    </div>
  )
}

export default SingleCartItem