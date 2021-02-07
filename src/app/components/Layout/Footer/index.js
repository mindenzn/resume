import Contacts from "../../Contacts";
import "./index.css";
import lang from "../../../translations";

function Footer({ lng }) {
  return (
    <footer className="Footer--container-grid">
      <Contacts
        tittle={lang[lng].footer.address.title}
        info1={lang[lng].footer.address.street}
        info2={lang[lng].footer.address.city}
      ></Contacts>
      <Contacts
        tittle={lang[lng].footer.contacts.title}
        info1="+370 654 37 970"
        info2="minde.ziur@gmail.com"
      ></Contacts>
      <Contacts
        tittle={lang[lng].footer.social.title}
        links={[
          {
            href: "https://www.facebook.com/minde.ziurlys",
            children: "FaceBook",
            target: "_blank",
          },
          {
            href: "https://github.com/mindenzn",
            children: "GitHub",
            target: "_blank",
          },
        ]}
      ></Contacts>
    </footer>
  );
}
export default Footer;
