import "./index.css";

function Pill({ children, color }) {
  const asignedColor = ["green", "yellow", "red"].includes(color)
    ? color
    : "grey";

  return (
    <aside className="Main--container-pillBox ">
      <p className={`${asignedColor}`}>{children}</p>
    </aside>
  );
}
export default Pill;
