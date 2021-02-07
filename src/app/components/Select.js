import translations from "../translations";
import "./Select.css";

function Select({ options = [], onChange }) {
  return (
    <select
      className="Header--select"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}
export default Select;
