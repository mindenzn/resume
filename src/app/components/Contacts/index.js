import "./index.css";

function Contacts({ tittle, info1, info2, links }) {
  return (
    <div>
      <h3 className="Footer--container-contacts">{tittle}</h3>
      {info1 && <p>{info1}</p>}
      {info2 && <p>{info2}</p>}
      {links &&
        links.map((link, index) => {
          return (
            <div className="Footer--containner-contatcs-linksBox" key={index}>
              <a
                className="Footer--container-contatcs-linkBox-links"
                {...link}
              />
            </div>
          );
        })}
    </div>
  );
}
export default Contacts;
