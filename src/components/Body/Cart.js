import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../Util/CartSlice'
import SingleCartItem from './SingleCartItem'
import { EMPTY_CART } from '../../Util/ImageContent'
import { Link } from 'react-router-dom'
function Cart() {
    const cartItem = useSelector((store)=> store.cart.Items)
    const dispatch = useDispatch();
    console.log(cartItem)
    function handleClearCartStore()
    {
        dispatch(clearCart());
    }
    if(cartItem.length ===0)
    {
        return <div className='flex justify-center items-center h-[80vh] gap-4 flex-col'>
            <img src={EMPTY_CART} className='h-28 w-28'></img>
            <span>Your cart is <span className='text-red-600 font-bold text-xl'>Empty</span> </span>
            <Link to='/'><span className='bg-green-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-lg'>Eat Now !</span></Link>
            </div>
    }
  return (
    <div className=' flex gap-10  ml-5 justify-center'>
        <div className='flex flex-col gap-4 w-[700px] '>
            <div className='h-52  bg-slate-100 p-10 flex flex-col gap-10 '>
                <span>Account | Login to your exist account or signUp</span>
                <div className='flex gap-6 items-end'>
                <span className='bg-white text-green-500 border text-sm border-green-500 px-4 py-1 flex flex-col justify-center text-center'>Have an account ?<span className='font-bold'>LOG IN</span></span>
                <span className='bg-green-500 text-white  text-sm px-6 py-1 flex flex-col justify-center text-center'>New user ?<span className='font-bold text-sm'>SIGN UP</span></span>
                </div>
               
            </div>
            <div className='h-24  bg-slate-100 p-8 font-bold text-slate-400'>
                <span>Delivery Address</span>
            </div>
            <div className='h-24 p-8 bg-slate-100 font-bold  text-slate-400' >
                <span>Payment</span>
            </div>
        </div>

        <div className='w-1/4  bg-slate-200 text-sm'>

                 <div className='flex flex-col gap-6 p-5 overflow-y-auto h-32 mt-8' >
                    {
                    cartItem.map((value,index)=>
                    {
                         return <SingleCartItem data={value} key={index}/>
                     })
                    }
                 </div>
                 <div className='flex flex-col gap-4 p-10'>
                    <span >Bill Details</span>
                    <span className='flex justify-between'>Item Total <span>price</span></span>
                    <span className='flex justify-between'>Delivery Fee 13.8 kms <span>price</span></span>
                   
                    <span className='flex justify-between'>Delivery Tip <span>price</span></span>
                    <span className='flex justify-between'>Platform fee <span>price</span></span>
                    <span className='flex justify-between'>GST and Restaurant Charges <span>price</span></span>
                 </div>
                 <div className='flex pb-4 items-center justify-around'>
                    <span onClick={()=>handleClearCartStore()} className='text-red-600 border-2 border-red-400 px-2 py-1 rounded-lg font-bold cursor-pointer'>Clear Cart</span>
                    <span className='px-3 py-[0.40rem] cursor-pointer bg-green-500 rounded-lg  text-white font-bold'>Buy Now</span>
                 </div>
        </div>
        
    </div>
  )
}

export default Cart