import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[600] text-[1.9rem] mb-8'>
                Get in touch
            </h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe 
                    title='google-maps' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.240237235423!2d106.82065539999999!3d-6.362946499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed668519e7cb%3A0x781bfb4a8c12fe!2sKos%20Cascade!5e0!3m2!1sid!2sid!4v1690714002275!5m2!1sid!2sid"
                    className='border-0 w-full h-full' 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                    <form className='w-full'>
                        <div className="mb-5">
                            <input 
                            type="text" 
                            placeholder='Your name' 
                            className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className="mb-5">
                            <input 
                            type="email" 
                            placeholder='Your email' 
                            className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className="mb-5">
                            <input 
                            type="text" 
                            placeholder='Subject' 
                            className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className="mb-5">
                            <textarea
                            type="text"
                            rows={3} 
                            placeholder='Write your message' 
                            className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor tect-center ease-linear duration-150'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
