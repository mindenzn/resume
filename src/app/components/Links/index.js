import "./index.css";

function Links({ description, img }) {
  return (
    <aside className="Icon--container">
      <img src={img} className="Icon"></img>
      <p className="Bold">{description}</p>
    </aside>
  );
}
export default Links;
