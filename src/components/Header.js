import React from 'react'
import Search from './Search';
const Header = ({handleDarkMode}) => {
  return (
    <div className=' bg-gray-400 h-[20dvh]  flex pt-8 items-center pl-10'>
        <Search/>
        <button onClick={()=> handleDarkMode(
                (previousDarkMode)=>!previousDarkMode
            )}
                className="save">Toggle</button>
    </div>
  )
}

export default Header