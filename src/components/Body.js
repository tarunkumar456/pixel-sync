import React, { useState } from 'react'
import Links from './Links';

const Body = () => {
  const [search, setSearch] = useState([]);
  return (
    <div className=' min-h-[80dvh]'>
      <Links />
    </div>
  )
}

export default Body