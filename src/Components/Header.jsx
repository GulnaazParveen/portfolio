import React from 'react'

const Header = () => {
    
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
