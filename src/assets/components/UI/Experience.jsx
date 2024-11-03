import React, { useState } from "react";
import { experienceData } from "../../data/experienceData";

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk membuka modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    // <section id="experience">
    //   <div className="container mx-auto px-4">
    //     <div className="flex items-center justify-between flex-wrap mb-7">
    //       <h3 className="text-headingColor text-[2rem] font-[700]">
    //         My Experiences
    //       </h3>
    //     </div>

    //     {/* Kontainer Kartu */}
    //     <div className="bg-red-300 w-full flex items-stretch gap-4 flex-wrap p-6">
    //       {experienceData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col gap-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex-grow"
    //         >
    //           {/* Gambar */}
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="h-32 w-full object-cover rounded-md"
    //           />

    //           {/* Konten */}
    //           <div className="flex flex-col flex-grow">
    //             <h3 className="text-xl font-semibold text-gray-800">
    //               {item.title}
    //             </h3>
    //             <p className="text-sm text-gray-500">
    //               {item.company} - {item.location}
    //             </p>
    //             <p className="text-xs text-gray-400">
    //               {item.startDate} - {item.endDate}
    //             </p>
    //           </div>

    //           {/* Deskripsi */}
    //           <div className="text-gray-700 text-sm mt-2">
    //             <p>{item.description.commonDesc}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="experience">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap mb-7">
          <h3 className="text-headingColor text-[2rem] font-[700]">
            My Experiences
          </h3>
        </div>
        {/* Kontainer Grid Kartu */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col gap-3 relative group"
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-full object-cover rounded-md"
              />

              {/* Overlay saat hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-primaryColor bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openModal(item)}
                  className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-md font-[400] ease-in duration-200"
                >
                  View Detail
                </button>
              </div>

              {/* Konten */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.company} - {item.location}
                </p>
                <p className="text-xs text-gray-400">
                  {item.startDate} - {item.endDate}
                </p>
              </div>

              {/* Deskripsi */}
              <div className="flex-grow mt-2 text-gray-700 text-sm">
                <p>{item.description.commonDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-auto">
              {/* Gambar */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-40 w-full object-cover rounded-md mb-4" // Tinggi gambar diubah menjadi h-40
              />

              {/* Konten */}
              <h3 className="text-2xl font-semibold mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {selectedItem.company} - {selectedItem.location}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                {selectedItem.startDate} - {selectedItem.endDate}
              </p>

              {/* Deskripsi Umum */}
              <p className="text-gray-700 mb-2">
                {selectedItem.description.commonDesc}
              </p>

              {/* Detail List */}
              <h4 className="font-semibold text-lg mb-2">Details:</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {selectedItem.description.list.map((descItem, index) => (
                  <li
                    key={index}
                    className=" text-gray-700 indent-[-1.5rem] pl-5 mb-2"
                  >
                    {descItem}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <h4 className="text-headingColor text-[18px] text-[700]">
                  Technologies:
                </h4>

                {selectedItem.technologies.length > 0 && selectedItem.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Tombol Close Modal */}
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
