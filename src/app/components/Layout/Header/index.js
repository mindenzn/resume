import Select from "../../Select";
import "./index.css";
import "../../../translations";
import lang from "../../../translations";

function Header({ lng, setLang }) {
  return (
    <header>
      <div className="Header--tittle-box">
        <div className="Header--lng-select">
          <Select
            onChange={setLang}
            options={[
              { value: "lt", children: "Lietuvių" },
              { value: "en", children: "English" },
            ]}
          />
        </div>
        <div className="Header--tittle-container">
          <h1>Mindaugas Žiurlys</h1>
          <h2 className="Header--tittle-container-spec">
            {lang[lng].header.title}
          </h2>
        </div>
      </div>
    </header>
  );
}
export default Header;
