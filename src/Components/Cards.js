import React from 'react'
import {AiOutlineUser,AiOutlineUsergroupAdd} from 'react-icons/ai'
import {RiOrganizationChart} from 'react-icons/ri'
function Cards() {
  return (
    <div className='w-full  py-[10rem] px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                <AiOutlineUser size={50} className=' mx-auto rounded-full bg-slate-200 text-blue-500 '/>
                <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
                <p className='text-center text-[2rem] font-bold text-blue-500'>$18</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'> 500gb storage</p> 
                   <p className='py-2 border-b mx-8'> 1 granted user</p>
                   <p className='py-2 border-b mx-8'> Send up to 2Gb files</p>
                   <p className='py-2 border-b mx-8'> limited to google files</p>
                   <button className='bg-[#2f41e2]  w-[200px] p-3 rounded text-white my-6 font-medium mx-auto px-6 py-3'> Get in Touch</button>
                </div>
            </div>
        
            <div className='w-full border flex flex-col bg-slate-200 p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500'>
                <AiOutlineUsergroupAdd size={50} className=' mx-auto   rounded-full bg-blue-100 text-blue-500 '/>
                <h2 className='text-2xl font-bold text-center py-8'> small team</h2>
                <p className='text-center text-[2rem] font-bold text-blue-500'>$50</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'> 1.5Tb storage</p> 
                   <p className='py-2 border-b mx-8'> 10 granted user</p>
                   <p className='py-2 border-b mx-8'> Send up to 10Gb files</p>
                   <p className='py-2 border-b mx-8'>
                    <li>google files</li>
                    <li>Drop Box</li> </p>
                   <button className='bg-[#000000] w-[200px] p-3 rounded text-blue-400 my-6'> Get in Touch</button>
                </div>
            </div>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                <RiOrganizationChart size={50} className=' mx-auto  bg-slate-200  rounded-full text-blue-500 '/>
                <h2 className='text-2xl font-bold text-center py-8'> Organization</h2>
                <p className='text-center text-[2rem] font-bold text-blue-500'>$100</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'> 5tb storage</p> 
                   <p className='py-2 border-b mx-8'> Multiple users</p>
                   <p className='py-2 border-b mx-8'> Send up to 1Tb files</p>
                   <p className='py-2 border-b mx-8'> all access to shared files </p>
                   <button className='bg-[#2f41e2]  w-[200px] p-3 rounded text-white my-6'> Get in Touch</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards