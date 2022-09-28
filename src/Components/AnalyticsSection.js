import React from 'react'
import Car from '../car.jpg'

function AnalyticsSection() {
  return (
    <div className='w-full bg-slate-300 py-6 px-4 '>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'> 
            <img className='w-[500px] mx-auto my-4' src={Car} alt=''/>
                <div className='flex flex-col justify-center'>
                <h1 className='text-blue-600 font-bold'>DATA ANALYTICS DASHBOARD</h1>
            <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your data correctly</p>
              <p>
                pqnefopqnvqpnvopqeivopnqevopnnqev 
                onqopenvoqnvikndsoppvnoq
                [nnevopnpnqevnim[ qmevonqomv[pwvpomwmvkdsmlmkks 
                mdvklm</p>
                <button className='bg-blue-600 p-2 w-[200px] font-medium rounded my-6 mx:auto text-white md:mx-0 py-3'>Explpore</button>
                </div>
        </div>    
    </div>
  )
}

export default AnalyticsSection