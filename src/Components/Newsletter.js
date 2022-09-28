import React from 'react'

function Newsletter() {
  return (
    <div className=' w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-4xl text-xl font bold py-2'> Want daily Updates on everything  Web3?</h1>
                <p> Sign up to our news letter</p>
            </div>
            <div className='my-4'>
                <div className=' flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-white' type='email border-2 border-blue-900' placeholder="email"/>
                    <button className='bg-white p-2 w-[200px] font-medium rounded  text-blue-600 ml-4 my-6 px-6 py-3'>Notify me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter