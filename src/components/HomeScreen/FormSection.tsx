import { formSectionText } from "../../locales/formSection";
import Form from "../shared/Form";
import "./../styles/formSectionStyles.css";

const FormSection = () => {
  return (
    <div id="formSection" className="formSection_container">
      <div className="formSection_content">
        <div className="container">
          <section>
            <h3>{formSectionText.title}</h3>
            <h3>{formSectionText.title_2}</h3>
          </section>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
