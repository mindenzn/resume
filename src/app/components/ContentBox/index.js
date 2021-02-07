import "./index.css";

function ContentBox({ tittle, children }) {
  return (
    <div className="Main--container-heroBox">
      <div className="Main--container-tittle">
        <h3>{tittle}</h3>
        <div className="Main--container-line"></div>
      </div>
      {children}
    </div>
  );
}
export default ContentBox;
