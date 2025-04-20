import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const handleScroll = (id) => {
   const section = document.getElementById(id);
   if (section) {
     section.scrollIntoView({ behavior: "smooth" });
     setMenuOpen(false); 
   }
 };
  return (
    <header>
      <div className="container-fluid">
        <div className="row headercontainer">
          <div className="col-6 d-flex justify-content-start align-items-center heading ">
            <div className="header-left">
              <h2>gulnaaz parveen</h2>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end">
            <div className="header-right  ">
              <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </div>
              <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <ul>
                  <li>
                    <button onClick={() => handleScroll("home")}>Home</button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll("about")}>About</button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll("skills")}>
                      Skills
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll("project")}>
                      Project
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll("contact")}>
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
