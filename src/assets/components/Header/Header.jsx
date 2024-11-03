import React, { useEffect, useRef } from "react";

const Header = () => {
  // const headerRef = useRef(null);
  const menuRef = useRef(null);

  // const stickyHeaderFunc = () => {
  //     window.addEventListener('scroll', () => {
  //         if(
  //             document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
  //         ) {
  //             headerRef.current.classList.add('sticky__header');
  //         } else {
  //             headerRef.current.classList.remove('sticky__header');
  //         }
  //     });

  // };

  // useEffect(() => {
  //     stickyHeaderFunc()

  //     return window.removeEventListener('scroll', stickyHeaderFunc)
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      // ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* {=========Logo=========} */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              F
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[600]">Fadil</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* {logo end} */}
          {/* {Menu Start} */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex item-center gap-10">
              <li>
                <a
                  href="#about"
                  className="text-smallTextColor font-[400]"
                  onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-smallTextColor font-[400]"
                  onClick={handleClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-smallTextColor font-[400]"
                  onClick={handleClick}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  className="text-smallTextColor font-[400]"
                  onClick={handleClick}
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-smallTextColor font-[400]"
                  onClick={handleClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* {Menu End} */}

          {/* {Menu Right} */}
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center gap-2 text-smallTextColor font-[400] border border-solid border-smallTextColor px-4 py-2 rounded-[8px] max-h-[50px] hover:bg-smallTextColor hover:text-white hover:font-[300] ease-in duration-300">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>

            <span
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* {Menu End} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
