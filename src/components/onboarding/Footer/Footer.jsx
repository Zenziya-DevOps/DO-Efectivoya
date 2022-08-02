import React from "react";
import logo_footer from "../../../images/logo-footer.svg";
import facebook from "../../../images/facebook_logo.svg";
import instagram from "../../../images/insta-footer.svg";
import whatsapp_footer from "../../../images/whatsapp-footer.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo_wrapper">
        <div>
          <span>
            <img src={logo_footer} alt="logo_footer" />
          </span>

          <ul>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={instagram} alt="facebook" />
            </li>
            <li>
              <img src={whatsapp_footer} alt="facebook" />
            </li>
          </ul>
        </div>
      </div>

      <ul className="footer_content_wrapper">
        <li>Pedir un préstamo</li>
        <li>Sobre nosotros</li>
        <li>Preguntas frecuentes</li>
        <li className="active_mail_footer">info@efectivoya.do</li>
      </ul>

      <div className="footer_copyrigth_wrapper">
        <ul>
          <li>Privacidad</li>
          <li>Términos y condiciones</li>
          <li>Consentimiento informado</li>
        </ul>

        <div>
            <p className="copyright_text">
                ©️ C.E.D. S.R.L / Todos los derechos reservados
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
