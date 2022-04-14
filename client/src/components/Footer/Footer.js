import "./footer.css";
import logo from "../../images/logo.png";
import me_logo from "../../images/me_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/kozmajani" target="_blank" rel="noreferrer">
        <img className="footerimg" src={logo} alt="Logo" />
      </a>
      <a href="https://www.uni-miskolc.hu/" target="_blank" rel="noreferrer">
        <img className="footerimg" src={me_logo} alt="ME_Logo" />
      </a>
    </div>
  );
};

export default Footer;
