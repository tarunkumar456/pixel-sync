import React from 'react'

const Links = ({ title, link,display,val,img }) => {
    let val1;
    if(img)
    {
        val1=img.cse_thumbnail;
    }
    return (
        <div className='min-h-[10vh] bg-slate-200 flex flex-col justify-start items-start w-[100%] m-2 p-3'>
            {val1 && <img src={val1.src}></img>}
            <div className=' font-bold text-2xl flex flex-col justify-start items-start'>
                {title}
            </div>
            <div className=' text-cyan-500 flex flex-col justify-start items-start'>
                <a href={link} target='_blank'>
                    {display}
                </a>
            </div>
            <div className=' flex flex-col justify-start items-start'>
                {val}
            </div>
        </div>
    )
}

export default Links