import React,{useState, useEffect} from 'react'
import portofolio from '../../data/portofolioData'
import data from '../../data/portofolioData'
import Modal from './Modal'

const Portofolio = () => {

    const [nextItems, setNextItems] = useState(3)
    const [portofolios, setPortofolios] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)


    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = id =>{
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(()=> {
        if(selectTab === 'all'){
            setPortofolios(data)
        }

        if(selectTab === 'web-design'){
            const filterData = data.filter(item => item.category === 'Web Design')
            setPortofolios(filterData)
        }

        if(selectTab === 'ux-design'){
            const filterData = data.filter(item => item.category === 'ux')
            setPortofolios(filterData)
        }
        
    },[selectTab])

  return (
    <section id="portofolio">
        <div className="container">

            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className='text-headingColor text-[2rem] font-[700]'>My Recent Projects
                    </h3>
                </div>
                <div className="flex gap-3">
                    <button 
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                    onClick={() => setSelectTab('all')}>
                        All
                    </button>
                    <button 
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                    onClick={() => setSelectTab('web-design')}>
                        Web Dev
                    </button>
                    <button 
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                    onClick={() => setSelectTab('all')}>
                        Machine Learning
                    </button>
                    <button 
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                    onClick={() => setSelectTab('ux-design')}>
                        UI/UX
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-12">
                {
                    portofolios?.slice(0, nextItems)?.map((portofolio, index) => (
                        <div
                        key={index} 
                        data-aos = 'fade-zoom-in'
                        data-aos-delay = '50'
                        data-aos-duration = '1000'
                        className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2] relative z-[1]'>
                            <figure>
                                <img className='rounded-[8px]' src={portofolio.imgUrl} alt="" />
                            </figure>

                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button 
                                    className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[400] ease-in duration-200'
                                    onClick={() => showModalHandler(portofolio.id)}>See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="text-center mt-6">

                {
                    nextItems < portofolios.length && data.length > 3 && (
                        <button 
                        className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[400] ease-in duration-200'
                        onClick={loadMoreHandler}>
                            Load More
                        </button>
                    )
                }
                
                
            </div>
        </div>

        {
            showModal && <Modal  setShowModal={setShowModal} activeID={activeID} />
        }
    </section>
  )
}

export default Portofolio
