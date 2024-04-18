import React from 'react'

const Header = () => {
    return (
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="heading header-left"></div>
                    </div>
                    <div class="col-md-6">
                        <div class=" heading header-right  ">
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
