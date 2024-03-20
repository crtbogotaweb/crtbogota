import { useParams } from "react-router-dom";
import AboutCompany from "../components/HomeScreen/AboutCompany";
import FormSection from "../components/HomeScreen/FormSection";
import LatestProjects from "../components/HomeScreen/LatestProjects";
import Main from "../components/HomeScreen/Main";
import OurServices from "../components/HomeScreen/OurServices";
import Statistics from "../components/HomeScreen/Statistics";
import Testimonials from "../components/HomeScreen/Testimonials";
import Copyright from "../components/shared/Copyright";
import Footer from "../components/shared/Footer";
import SocialFloatIcons from "../components/shared/SocialFloatIcons";
import TopArrow from "../components/shared/TopArrow";
import { useEffect } from "react";
import Swal from "sweetalert2";

const HomeScreen = () => {
  const { email } = useParams();

  const showSendEmailModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Correo enviado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log("email", email);
    if (email) showSendEmailModal();
  }, []);

  return (
    <div>
      <Main />
      <OurServices />
      <Statistics />
      <LatestProjects />
      <AboutCompany />
      <FormSection />
      <Testimonials />
      <Footer />
      <Copyright />
      <SocialFloatIcons />
      <TopArrow />
    </div>
  );
};

export default HomeScreen;
