import React, { useState } from "react";
import { SendMessage } from "../../../services/SendMessage";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handelButtonSubmit = async (e) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:3000/contact", {
    //     name,
    //     email,
    //     subject,
    //     message,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setShowModal(true);
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[600] text-[1.9rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          {/* <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.240237235423!2d106.82065539999999!3d-6.362946499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed668519e7cb%3A0x781bfb4a8c12fe!2sKos%20Cascade!5e0!3m2!1sid!2sid!4v1690714002275!5m2!1sid!2sid"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}

          <div className="w-full mt-8 md:mt-0 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={handelButtonSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor tect-center ease-linear duration-150"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

       {/* Modal Alert */}
       {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Feature Unavailable</h3>
            <p className="text-gray-600 mb-6">
              This feature is still under development. You can contact me
              directly by sending an email to <a href="mailto:fadillarahim7@gmail.com" className="text-blue-600">fadillarahim7@gmail.com</a>.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-headingColor"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
