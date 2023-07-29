
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className="container">
            <div className='flex items-center justify-between'>
                {/* {=========Logo=========} */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                        F
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
                <div className="flex items-center gap-4">
                    <button className='flex items-center justify-center gap-2 text-smallTextColor font-[400] border border-solid border-smallTextColor px-4 py-2 rounded-[8px] max-h-[50px] hover:bg-smallTextColor hover:text-white hover:font-[300] ease-in duration-300'>
                        <i class="ri-send-plane-line"></i> Let's Talk
                    </button>

                    <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
                {/* {Menu End} */}
            </div>
        </div>
    </header>
  )
}

export default Header
