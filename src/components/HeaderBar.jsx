// HeaderBar component
const HeaderBar = ({ text, setSearchText }) => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <h1>{text}</h1>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="text"
            placeholder="Filter tasks"
            aria-label="Search"
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          />
        </form>
      </div>
    </nav>
  );
};

export default HeaderBar;
