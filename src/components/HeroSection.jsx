import React from 'react'

function HeroSection() {
  return (
    <div className='w-full px-[10%]'>
        <div>
            <p className='text-[rgb(198,129,108)] font-semibold'>BEST DESTINATIONS AROUND THE WORLD</p>
            <div className='flex flex-col gap-12'>
                <p className='text-[45px] font-semibold whitespace-pre-line'>{"Explore the world,\nembrace new adventures,\nand create lifetime of \nunforgettable memories."}</p>
                <p className='text-[rgb(165,165,165)] whitespace-pre-line'>{"Venture beyond the odrinary,discover untold stories,and \nembark on journeys that inspire and captivate your soul."}</p>
            </div>
            <div className='flex gap-5 items-center mt-12'>
                <button className='bg-[rgb(243,162,2)] px-3 py-2 rounded-[5px]'>Find out more</button>
                <div className='flex gap-5 items-center'>
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[50%] bg-red-500 shadow-[0_0px_10px_rgb(150,150,150)]'>
                        <svg width="20" height="20" viewBox="0 0 100 100" className="rounded-full shadow-[0_0px_10px_rgb(150,150,150)]">
                              <polygon points="30,10 80,50 30,90" fill="white" />
                        </svg>
                    </div>
                    <p>Play Demo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection