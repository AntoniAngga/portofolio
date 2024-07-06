import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Full Stack Web Development",
    text: [
      "FullStack web development refers to the practice of developing both the front end (client-side) and back end (server-side) portions of a web application. A FullStack developer is proficient in working with the complete stack of technologies required to build a complete web application from start to finish. This includes everything from the user interface to the server logic and database management.",
      "Frontend Development: \n\nVuejs, and React Native",
      "Backend Development: \n\nNodejs, Golang",
    ],
    image: "assets/img/news/full-stack-dev/1.jpg",
  },
  {
    id: 2,
    name: "Mobile Apps",
    text: [
      "A mobile developer specializes in creating software applications that run on mobile devices, such as smartphones and tablets. These professionals design, develop, and maintain applications for various mobile operating systems, primarily iOS (Apple) and Android (Google). Here is a comprehensive overview of what it means to be a mobile developer.",
      "I am still right now using hybrid framework to development mobile apps. and i am using Framework Flutter and React Native",
    ],
    image: "assets/img/news/full-stack-dev/1.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
