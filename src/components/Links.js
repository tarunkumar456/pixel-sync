import React from 'react'

const Links = ({ title, link }) => {
    return (
        <div className='h-[10vh] bg-slate-200 flex flex-col justify-start items-start w-[100%] m-2 pl-3'>
            <div className=' font-bold text-2xl flex flex-col justify-start items-start'>
                {title}
            </div>
            <div className=' text-cyan-500 flex flex-col justify-start items-start'>
                <a href={link} target='_blank'>
                    {link}
                </a>
            </div>
        </div>
    )
}

export default Links