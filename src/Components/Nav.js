import React,{useState} from 'react'
import {BiCubeAlt} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseO} from 'react-icons/cg'

function Nav() {

  const [nav,setNav] = useState(false)

  const handelNav = () => {
    setNav(!nav);
  }
  return (
    <div className=' flex h-24 items-center mx-w-[720px] px-4 mx-auto text-white'>
      <p className='w-full   font-semibold  text-4xl flex'><BiCubeAlt style={{marginRight:10, fontSize:40}}/>GMT3</p>
          <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Payments</li>
            <li className='p-4'>links</li>
            </ul>
    <div onClick={handelNav} className='block md:hidden'>
      {!nav ? <GiHamburgerMenu size={30}/>: <CgCloseO size={20}/>}
    </div> 
    <div className={!nav ? 'fixed left-[-100%]' :'fixed left-0 top-0 w-[60%] h-full border-r border-r-zinc-100 bg-[#fff] ease-in-out duration-500' }>
    <p className='w-full p-2  font-semibold  text-4xl flex text-indigo-800'><BiCubeAlt style={{marginLeft:10, fontSize:40}}/>GMT3</p>
    <ul className='p-2 uppercase text-indigo-800  font-bold'>
            <li className='p-4 border-b border-indigo-200'>Home</li>
            <li className='p-4 border-b border-indigo-200'>About</li>
            <li className='p-4 border-b border-indigo-200'>Contact</li>
            <li className='p-4 border-b border-indigo-200'>Payments</li>
            <li className='p-4'>links</li>
            </ul>
    </div>
    </div>
  )
}

export default Nav