import {
  itemsTestimonials,
  testimonialTitle,
} from "../../locales/testimonials";
import MeterBackground from "../shared/MeterBackground";
import Separator from "../shared/Separator";
import Slider from "../shared/Slider";
import ToUpMeterBackground from "../shared/ToUpMeterBackground";

const Testimonials = () => {
  return (
    <div>
      <MeterBackground />
      <div className="container p_section">
        <h2 className="title">{testimonialTitle}</h2>
        <Separator />
        <Slider testimonialData={itemsTestimonials} />
      </div>
      <ToUpMeterBackground />
    </div>
  );
};

export default Testimonials;
