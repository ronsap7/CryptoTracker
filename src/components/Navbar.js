
import './Navbar.css';

function Navbar() {
 



  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="links">
        {/* <div className="dropdown">
          <button onClick={toggleDropdown}>
            Browse
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <a href="#">All Coins</a>
              <a href="#">Top 10</a>
              <a href="#">Newly Added</a>
            </div>
          )}
        </div> */}
        {/* <a href="#">My Portfolio</a>
        <a href="#">Settings</a> */}
      </div>
    </nav>
  );
}

export default Navbar;
