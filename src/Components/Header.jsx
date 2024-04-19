import React from 'react'

const Header = () => {
    
    return (
        <header>
            <div className="container-fluid">
                <div className="row headercontainer">
                    <div className="col-6 d-flex ">
                        <div className="heading header-left">dfasdds</div>
                    </div>
                    <div className="col-md-6">
                        <div className=" heading header-right  ">
                            <nav>
                                <ul>
                                    <li><a href="">home</a></li>
                                    <li><a href="">about</a></li>
                                    <li><a href="">skills</a></li>
                                    <li><a href="">project</a></li>
                                    <li><a href="">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
