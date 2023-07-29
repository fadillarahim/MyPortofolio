
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className="container">
            <div className='flex items-center justify-between'>
                {/* {=========Logo=========} */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                        M
                    </span>

                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[600]'>Fadil</h2>
                        <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>
                    </div>
                </div>
                {/* {logo end} */}
                {/* {Menu Start} */}
                <div className="menu">
                    <ul className='flex item-center gap-10'>
                        <li className='text-smallTextColor font-[400]'><a href="#about">About</a></li>
                        <li className='text-smallTextColor font-[400]'><a href="#services">Services</a></li>
                        <li className='text-smallTextColor font-[400]'><a href="#portofolio">Portofolio</a></li>
                        <li className='text-smallTextColor font-[400]'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                {/* {Menu End} */}

                {/* {Menu Right} */}
                <div className="flex item-center gap-4">
                    <button>

                    </button>
                </div>
                {/* {Menu End} */}
            </div>
        </div>
    </header>
  )
}

export default Header
