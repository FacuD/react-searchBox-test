import "./styles.css";

export const SearchBox = ({ handleChange }) => {
  return (
  <div className="searchBox">
    <input type="text" onChange={(e) => handleChange(e.target.value)} />
    {/* TODO: Add a search button 🔍 */}
    {/* TODO: Add a ❌ button */}
    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
  </div>
  );
};
