import React from 'react'

function Header() {
  return (
    <div className='bg-white w-full px-20'>
        {/* <div style={{ position: 'absolute', width: '1000px', height: '700px' }} className='top-12 right-12 rotate-[200deg]'>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,262 C 129.67857142857142,263.25 259.35714285714283,264.5 367,249 C 474.64285714285717,233.5 560.2500000000001,201.24999999999997 679,195 C 797.7499999999999,188.75000000000003 949.6428571428571,208.50000000000003 1082,224 C 1214.357142857143,239.49999999999997 1327.1785714285716,250.75 1440,262 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        </div> */}
        <div className='flex justify-between'>
            <p className='text-black text-[35px] font-semibold'>Skyline</p>
            <div className='flex justify-center items-center gap-20'>
                <p className='text-black'>Destinations</p>
                <p className='text-black'>Hotels</p>
                <p className='text-black'>Fligths</p>
                <p className='text-black'>Bookings</p>
                <p className='text-black'>Login</p>
                <div className='flex justify-between gap-5'>
                    <button className='text-black border-[2px] border-red-400 rounded-[5px] px-2 py-1'>Sign Up</button>
                    <button className='text-black border-[2px] border-red-400 rounded-[5px] px-2 py-1'>Sign In</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header