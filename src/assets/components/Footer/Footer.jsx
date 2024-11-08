import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* {footer top} */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beutiful products?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i> Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              We all make mistakes. The key is admitting it, learning, and
              moving on. The real sin is to ignore mistakes, or even worse, to
              try to hide them.{" "}
              <span className="italic bold"> - Robert Zoellick</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[400] text-[15px]">
                Follow Me:
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/fadilla-rahim-96034621b/"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/fadillarahim"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.instagram.com/fadilla_rahim/"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="menu">
          <ul className="flex item-center justify-center gap-10 mt-10">
            <li className="text-gray-400 font-[400]">
              <a href="#about">About</a>
            </li>
            <li className="text-gray-400 font-[400]">
              <a href="#services">Services</a>
            </li>
            <li className="text-gray-400 font-[400]">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-gray-400 font-[400]">
              <a href="#portofolio">Portofolio</a>
            </li>
            <li className="text-gray-400 font-[400]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* {footer top end} */}

      {/* {Footer Botom} */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  F
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Fadil
                  </h2>
                  <p className="text-gray-300 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} develop by Fadilla Rahim - All rigth reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {Footer Botom End} */}
    </footer>
  );
}

export default Footer;
