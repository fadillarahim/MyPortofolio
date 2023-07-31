import React from 'react'
import frontEndImg from '../../images/front-end.png'
import MLImg from '../../images/ML-white.png'
import uiuxImg from '../../images/design.png'
import dataImg from '../../images/data.png'

const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do I help</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>I Have an interest in learning more about Machine Learning, Data Science, Data Analytics, Business Development for companies to optimally improve their brand, and Software Engineering especially web development
                </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        {/* {vertical line running through the middle} */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* {left card} */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div 
                                        data-aos="fade-right"
                                        data-aos-duration="1200"
                                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Machine Learning Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[300]
                                            font-[200]'>Having experience building machine learning models using Python and various libraries such as Tensorflow, Keras, Numpy, Pandas etc.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={MLImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* {Right card} */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div 
                                        data-aos="fade-left"
                                        data-aos-delay='50'
                                        data-aos-duration="1300"
                                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Web Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[300]
                                            font-[200]'>Build a web using Javascript, React Js,  Tailwind CSS, Bootstrap, Node js, MySQL and other tools</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={frontEndImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* {left card} */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div 
                                        data-aos="fade-right"
                                        data-aos-delay='100'
                                        data-aos-duration="1400"
                                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Data Science and Analytics</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[300]
                                            font-[200]'>Have an interest in the field of data using various tools such as MySQL, Tableu, Excel and have statistical skills and various algorithms</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={dataImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* {Right card} */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div 
                                        data-aos="fade-left"
                                        
                                        data-aos-duration="1500"
                                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>UI/UX Design</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[300]
                                            font-[200]'>Have the ability to create an attractive UI using Figma and analyze user requirements for the appearance of the application</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={uiuxImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services
