import React from 'react'
import heroImg from '../../images/fadil.png'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* {Hero Left Content} */}
                <div className="w-full md:basis-1/2">
                    <h5 
                    data-aos="fade-right" 
                    data-aos-duration="1500"
                    className='text-headingColor font-[600] text-[16px]'>
                        Hello Welcome
                    </h5>
                    <h1 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5' >
                        I'm Fadilla Rahim <br />Machine Learning and Web Developer
                    </h1>

                    <div 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                    data-aos-delay = "200"
                    className='flex items-center gap-6 mt-7'>
                        <a href="#contact">
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                            <i class="ri-mail-line"></i> Hire Me
                            </button>
                        </a>
                        <a href="#portofolio" className='text-smallTextColor font-[450] text-[16px] border-b border-solid border-smallTextColor'>
                            See Portofolio
                        </a>

                    </div>

                    <p 
                        data-aos="fade-left" 
                        data-aos-duration="1500"
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-7 sm:pr-10'>
                            <span>
                            <i class="ri-apps-line"></i>
                            </span>
                            An undergraduate student majoring in Informatics Engineering who is eager to expand his potential in terms of academics and real-world work experience.
                    </p>

                    <div className="flex items-center gap-9 mt-14">
                        <span className='text-smallTextColor text-[15px] font-[500]'>
                            Follow me:
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/fadilla-rahim-96034621b/" className='text-smallTextColor text-[18px] font-[600]' target="blank">
                                <i class="ri-linkedin-box-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/fadillarahim" className='text-smallTextColor text-[18px] font-[600]' target="blank">
                                <i class="ri-github-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/fadilla_rahim/" className='text-smallTextColor text-[18px] font-[600]' target="blank">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </span>
                    </div>

                </div>
                {/* {Hero Left End} */}
                {/* {Hero Img} */}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                {/* {Hero Img End} */}

                {/* {Hero content right} */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={2} duration={2} suffix="+" />
                            </h2>
                            <h4 className='text-headingColor font-[500] text-[16px]'>Year of experiences</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={80} duration={2} suffix="%" />
                            </h2>
                            <h4 className='text-headingColor font-[500] text-[16px]'>Python</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={85} duration={2} suffix="%" />
                            </h2>
                            <h4 className='text-headingColor font-[500] text-[16px]'>Javascript</h4>
                        </div>
                        
                    </div>
                {/* {Hero content right End} */}
            </div>
        </div>

    </section>
  )
}

export default Hero

