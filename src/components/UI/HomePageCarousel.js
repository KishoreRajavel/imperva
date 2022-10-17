import React from "react";

const HomePageCarousel = ({ list }) => {
  return (
    <div className="HomePageCarousel">
      <h1>Recognized Leadership</h1>
      <div className="HomePageCarousel-carousel">
        {list.content.map((item) => (
          <div className="HomePageCarousel-carousel-item">
            <div className="HomePageCarousel-carousel-item-text">
              <img src={item.img_1Url} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h3>{item.link}</h3>
            </div>
            <div className="HomePageCarousel-carousel-item-image">
              <img src={item.img_2Url} alt="img" />
            </div>
          </div>
        ))}
        {/* <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="HomePageCarousel-carousel-item">
          <div className="HomePageCarousel-carousel-item-text">
            <img src="https://www.imperva.com/wp-content/uploads/2021/05/Gartner_logo_blue_small_digital-1.png" />
            <h3>One solution comprehensive Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a,
              placeat reiciendis aliquam soluta illo iste, culpa at voluptates
              blanditiis perferendis necessitatibus corporis quibusdam porro
              possimus quasi, laudantium sed? Consectetur?
            </p>
            <h3>Read the Report</h3>
          </div>
          <div className="HomePageCarousel-carousel-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/gartner-magic-quadrant-2022-leadership.svg"
              alt="img"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePageCarousel;
