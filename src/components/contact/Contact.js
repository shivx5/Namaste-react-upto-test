import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center gap-10 flex-col h-[80vh]'>
        <heading>hello </heading>
        <h2>Fill the form</h2>
        <form className='flex gap-7'>
            <div className='flex gap-4'>
                    <span>Name :</span>
                    <input  className='border border-green-500 rounded' placeholder='name'/>
            </div>
            <div className='flex gap-4 '>
                    <span>pass :</span>
                    <input className='border border-green-500 rounded'/>
            </div>
        </form>
        <button className='px-2 py-1 bg-blue-500 text-white rounded-lg cursor-pointer font-semibold'>Submit</button>
    </div>
  )
}

export default Contact