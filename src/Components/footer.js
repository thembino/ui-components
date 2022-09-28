import React from 'react'
import {AiOutlineInstagram,AiFillGithub,AiOutlineTwitter,AiOutlineDribbble} from 'react-icons/ai'
import {TbBrandMeta} from 'react-icons/tb'
function footer() {
const click =() =>{
  
}

  return (
    <div className='max-w-[1240px] mx-aut py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-200'>
      <div><h1 className='w-full font-semibold text-2xl flex'>GMT3</h1>
      <p className='py-4'> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        It has survived not only five centuries</p>
        <div className='lg:col-span-3 flex justify-between md:w-[75%] my-6'>
          <TbBrandMeta size={30} onClick={click}/>
          <AiOutlineInstagram size={30} onClick={click}/>
          <AiFillGithub size={30} onClick={click}/>
          <AiOutlineTwitter size={30} onClick={click}/>
          <AiOutlineDribbble size={30} onClick={click}/>
        </div>
        </div>
      
        
        <div className='lg:col-span-2 flex justify-between'>
          <div> 
            <h6 className='font-medium text-gray'> Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>
              Analytics</li>
            <li className='py-2 text-sm'>
             Data Vision</li>
            <li className='py-2 text-sm'>
              Commerce</li>
            <li className='py-2 text-sm'>
              Insights</li>
          </ul>
          </div>
          <div> 
            <h6 className='font-medium text-gray'> Support</h6>
          <ul>
            <li className='py-2 text-sm'>
              Commerce</li>
            <li className='py-2 text-sm'>
            API intergration</li>
            <li className='py-2 text-sm'>
              Data integrity</li>
            <li className='py-2 text-sm'>
              Visualization</li>
          </ul>
          </div>
          <div> 
            <h6 className='font-medium text-gray'> Company</h6>
          <ul>
            <li className='py-2 text-sm'>
              Profile</li>
            <li className='py-2 text-sm'>
             Careers</li>
            <li className='py-2 text-sm'>
              Jobs</li>
            <li className='py-2 text-sm'>
              Blogs</li>
          </ul>
          </div>
          
        
        </div>
    </div>
  )
}

export default footer