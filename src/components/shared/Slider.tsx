import { useState } from "react";
import "./../styles/sliderStyles.css";
import { IServicesData, ITestimonialData } from "../../interfaces/testimonials";

interface Props {
  testimonialData?: ITestimonialData[];
  servicesData?: IServicesData[];
}

const Slider = ({ testimonialData, servicesData }: Props) => {
  const [imgSelected, setImgSelected] = useState(0);

  const setStyles = () => {
    if (testimonialData) {
      return {
        transform: `translateX(calc(-${imgSelected} / ${testimonialData.length} * ${testimonialData.length}00%))`,
      };
    }

    if (servicesData) {
      return {
        transform: `translateX(calc(-${imgSelected} / ${servicesData.length} * ${servicesData.length}00%))`,
      };
    }
  };

  const styleMovement = setStyles();

  const handleTransition = (index: number) => setImgSelected(index);

  if (testimonialData) {
    return (
      <>
        <div className="slider_container">
          {testimonialData.map((item, index) => (
            <div key={index} style={styleMovement} className="slider_card">
              <img src={item.image} alt="" />
              <section>
                <h4>{item.name}</h4>
                <h4>{`/ ${item.position}`}</h4>
              </section>
              <p className="paragraph">{`"${item.testimonial}"`}</p>
            </div>
          ))}
        </div>
        <div className="check_box">
          {testimonialData.map((item, index) => (
            <i
              key={item.image}
              onClick={() => handleTransition(index)}
              className={`fa-solid fa-square ${
                index === imgSelected && "selectedCheckbox"
              }`}
            ></i>
          ))}
        </div>
      </>
    );
  }

  if (servicesData) {
    return (
      <>
        <div className="slider_container">
          {servicesData.map((item, index) => (
            <div
              key={index}
              style={styleMovement}
              className="slider_card service"
            >
              <img className="img_service" src={item.image} alt="" />
              <h4>{item.title}</h4>
              <div className="container">
                {item.list.map((li) => (
                  <section key={li}>
                    <i className="fa-solid fa-caret-right"></i>
                    <span>{li}</span>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="check_box">
          {servicesData.map((item, index) => (
            <i
              key={item.image}
              onClick={() => handleTransition(index)}
              className={`fa-solid fa-square ${
                index === imgSelected && "selectedCheckbox"
              }`}
            ></i>
          ))}
        </div>
      </>
    );
  }
};

export default Slider;
