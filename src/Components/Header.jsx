import React from "react";

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="row headercontainer">
          <div className="col-6 d-flex justify-content-start align-items-center heading ">
            <div className="header-left">gulnaaz parveen</div>
          </div>
          <div className="col-6">
            <div className="header-right  ">
              <nav>
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
