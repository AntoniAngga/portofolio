import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Hacktiv8",
    text: [
      "Started in 2018, and I am already graduating from my coding boot camp which takes 4 months. I am working at Hacktiv8 as a full-stack programmer. this is my list of creating applications for hacktiv8:",
      "1. Create a website",
      "for branding and a backend for student form the website is built from HTML and CSS manually. Backend the system using Zapier in a fast way. for student register and put the data on Airtable.",
      "2. Create Hiring Portal",
      "the website using Nodejs, ExpressJs and ORM Sequelize, the system design Monolith. A hiring Portal system for a company wanna find a programmer as graduated from school, and the team company can see the score, and see the project he/she built. the system deployed to Heroku"
    ],
    client: "Hacktiv8",
    date: "2018",
    category: "Fulltime Jobs",
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Agtran",
    text: [
      "the business flow is booking rental cars. the company from Malaysia. At the start, I am doing Backend Engineer:",
      "- Framework: Nodejs ( Typescript ) + ExpressJs, ",
      "- ORM: Typeorm.",
      "- Server deployment: Heroku.com",
      "- Memory Storage: Redis",
    ],
    client: "Agtran",
    date: "2020",
    category: "Freelance",
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },{
    id: 3,
    thumbnail: "assets/img/portfolio/kapok-fiber/tumbnail.png",
    title: "Website Kapokfiber.id",
    text: [
      "Creating website for Business Kapokfiber, working with team:",
      "- Framework: Nextjs+tailwind",
      "- Server deployment: Vercel",
    ],
    client: "David",
    date: "2021",
    category: "Freelance",
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "PT Sinar Deli",
    text: [
      "the company ran many projects for the first time I joined the company. I should build a system of Flight Ticketing, Hotel, and Bus for the Indonesian government. my role on this project is SPV IT, so I build a team with Agile project build. so I have 5 people without me. the system will be Mobile apps and a website for booking tickets. following the system specification",
      "- UI UX: Figma",
      "- Backend: Golang,",
      "- Frontend: Next js",
      "- Background Job: Nodejs + Redis + Bull Js",
      "- Server: Digital Ocean, and AWS.",
      "- Mobile Apps: React Native.",
      "- Server deployment: Heroku.com",
      "- Memory Storage: Redis",
    ],
    client: "PT Sinar Deli",
    date: "2021",
    category: "Fulltime Jobs",
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Creative Portfolio"}
              />
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              {detailData.map((item) => (
                <li key={item.id} className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title={item.title}
                    data-category={item.category}
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(item);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
