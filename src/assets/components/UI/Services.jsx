import React from "react";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 ">
            What do I help
          </h2>
          <p className="lg:max-w-[650px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            I am passionate about Software Engineering, Web & App Development,
            and Machine Learning. With a year of professional experience, I
            focus on developing scalable, user-centric applications using
            JavaScript frameworks like React.js, React Native, and Express.js. I
            am also interested in data-driven solutions, specializing in NLP,
            and have hands-on experience with Python, Flask, and other
            technologies.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-6 ">
          <div className="w-full py-3 px-2 sm:max-w-3xl sm:mx-auto sm:px-0 ">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {servicesData.map((service, index) => (
                <div key={index} className="mt-3 sm:mt-0 sm:mb-6 ">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      } w-full mx-auto items-center`}
                    >
                      <div className={`w-full lg:w-5/12 sm:${
                        index % 2 === 0 ? "pr-2" : "pl-2"
                      }`}>
                        <div
                          data-aos={
                            index % 2 === 0 ? "fade-right" : "fade-left"
                          }
                          data-aos-delay={`${index * 50}`}
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 shadow-lg"
                        >
                          <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[500] text-2xl">
                            {service.title}
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[300] font-[200]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>{service.icon}</figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
