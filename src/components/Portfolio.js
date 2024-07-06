import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/agtran/tumbnail.jpg",
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
    withImage:false,
    category: "Backend Engineer",
    bigImage: "/assets/img/portfolio/agtran/1.png",
  },{
    id: 2,
    thumbnail: "assets/img/portfolio/kapok-fiber/tumbnail.png",
    title: "Website Kapokfiber.id",
    text: [
      "Creating website for Business Kapokfiber, working with team:",
      "- Framework: Nextjs+tailwind",
      "- Server deployment: Vercel",
    ],
    client: "David",
    withImage: false,
    date: "2021",
    category: "Project Manager",
    bigImage: "assets/img/portfolio/kapok-fiber/1.png",
    
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
  // const handleFilterKeyChange = (key) => () => {
  //   setFilterKey(key);
  // };
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
                        src={item.thumbnail}
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url={item.thumbnail}
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
