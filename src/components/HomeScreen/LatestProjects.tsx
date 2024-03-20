import "./../styles/latestProjectsStyles.css";
import { latestProjectText } from "../../locales/latestProjects";
import MeterBackground from "../shared/MeterBackground";
import Separator from "../shared/Separator";
import image1 from "./../../assets/latestProjects/image-1.png";
import image2 from "./../../assets/latestProjects/image-2.png";
import image3 from "./../../assets/latestProjects/image-3.png";
import image4 from "./../../assets/latestProjects/image-4.png";
import image5 from "./../../assets/latestProjects/image-5.png";
import image6 from "./../../assets/latestProjects/image-6.png";

const LatestProjects = () => {
  const imagesArray = [image1, image2, image3, image4, image5, image6];

  return (
    <div id="latestProjects">
      <MeterBackground />
      <div className="p_section container">
        <h2 className="title">{latestProjectText.title}</h2>
        <Separator />
        <p className="paragraph">{latestProjectText.subtitle}</p>
        <div className="latestProjects_imgs_container">
          {imagesArray.map((image) => (
            <img key={image} src={image} alt={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
