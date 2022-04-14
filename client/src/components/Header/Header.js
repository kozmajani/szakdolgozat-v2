import "./header.css";
import abscura from "../../images/abscura.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={abscura} alt="Logo" width="100px" />
      </div>
      <div className="abscura-title">abscura.</div>
    </div>
  );
};

export default Header;
