import React from 'react'
import Search from './Search';
import google from '../uploads/google.png'
const Header = ({handleDarkMode}) => {
  return (
    <div className=' bg-gray-400 h-[20dvh]  flex pt-8 items-center pl-10'>
        <div ><img src={google} alt="img" className=' w-20 mr-4'/> </div>
        <Search/>
        <button onClick={()=> handleDarkMode(
                (previousDarkMode)=>!previousDarkMode
            )}
                className="save">Toggle</button>
    </div>
  )
}

export default Header