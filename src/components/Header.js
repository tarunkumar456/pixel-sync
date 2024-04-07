import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import Search from './Search';
import axios from 'axios'
import Links from './Links';
const Header = ({ handleDarkMode }) => {
  const query = "hello";
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(0);
  const Search1 = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAfp5jCnmuLZZNRDkG7V7CjKcSaaXSN13E&cx=a1af7bb50039b45a6&q=${username}`);
      if (response) {
        console.log(response.data.items)
        setData(response.data.items)
        // setSearchResults(response.data.items);
        // setSearchInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const Search2 = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAfp5jCnmuLZZNRDkG7V7CjKcSaaXSN13E&cx=a1af7bb50039b45a6&searchType=image&q=${username}`);
      if (response) {
        console.log(response.data.items)
        setData(response.data.items)
        // setSearchResults(response.data.items);
        // setSearchInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const All = () => {
    setShow(0);
    Search1();
  }
  const Image1 = () => {
    setShow(1);
    Search2();
  }
  return (

    <div>
      <div className=' bg-gray-400 h-[20dvh]  flex pt-8 items-center pl-10'>
        {/* <div ><img src={google} alt="img" className=' w-20 mr-4'/> </div> */}
        <div className='w-[80%] items-center rounded-xl bg-gray-200'>
          <div className='flex px-5 py-2 h-full w-full bg-brown-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 border border-gray-100 items-center  justify-between '>
            <div className='flex items-center gap-2 w-full pr-5 '>
              <FiSearch />
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Search Us or type a URL...' className='bg-transparent outline-none w-full' />
            </div>
            <button onClick={Search1} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
          </div>
        </div>
        <button onClick={() => handleDarkMode(
          (previousDarkMode) => !previousDarkMode
        )}
          className="save">Toggle</button>
      </div>
      <div className='flex p-3'>
        <button onClick={All} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All</button>
        <button onClick={Image1} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Image</button>
      </div>
      {
        !show &&
        <div className='  flex flex-col justify-start items-start'>
          {
            data.map((i) => {
              return (
                <Links title={i.title} link={i.link} display={i.displayLink} val={i.snippet} img={i.pagemap} />
              )
            })
          }
        </div>
      }
      {
        show &&
        <div className='  flex flex-wrap justify-evenly '>
          {
            data.map((i) => {
              return (
                <div>
                  <img className='w-[20vw] h-[20vw] border-slate-900 border-2 m-2' src={i.link}></img>
                  <a href={i.displayLink} target='_blank' className=' text-sky-500'><div>{i.displayLink}</div></a>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Header;