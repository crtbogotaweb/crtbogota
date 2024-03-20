import "./../styles/formSectionStyles.css";

const Form = () => {
  return (
    <form
      action="https://formsubmit.co/crtbogota@gmail.com"
      method="POST"
      className="form"
    >
      <input type="text" name="nombre" required placeholder="Nombre" />
      <input type="text" name="apellido" placeholder="Apellido" />
      <input type="email" name="email" required placeholder="Email" />
      <input type="text" name="motivo" required placeholder="Motivo" />
      <textarea
        required
        name=""
        placeholder="Ingrese un texto"
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <input
        type="hidden"
        name="_next"
        value="https://main--crtbogota.netlify.app/#/true"
      ></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  );
};

export default Form;
