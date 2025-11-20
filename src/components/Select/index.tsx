export const Select: React.FC = () => {
  return (
    <div className="flex flex-col w-40 ">
      <label htmlFor="continent">Filter by Region: </label>
      <select className="cursor-pointer" name="continent" id="continent">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};
