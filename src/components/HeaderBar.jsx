// HeaderBar component
const HeaderBar = ({ text, setSearchText }) => {
  return (
    <div className="row">
      <div className="col text-center bg-dark text-white">
        <div className="h1">{text}</div>
      </div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
          }}
        />
      </form>
    </div>
  );
};

export default HeaderBar;
