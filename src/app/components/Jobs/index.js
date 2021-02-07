function Jobs({ position, company, years, description }) {
  return (
    <div>
      <h2>{position}</h2>
      <h3>{company}</h3>
      <h3>{years}</h3>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Jobs;
