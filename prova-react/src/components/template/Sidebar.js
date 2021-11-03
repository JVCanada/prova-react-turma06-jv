import React from 'react'
import { Link } from "react-router-dom";

// Importando Imagens:
import Logo from '../../assets/images/logo.png'

function Sidebar(props) {

    return(
        <>
    
            {/* <!-- sidebar menu start --> */}
            <div class="sidebar-menu sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div class="logo">
                    <h1><Link to="/"> Collective </Link> </h1>
                </div>

                {/* <!-- if logo is image enable this --> */}
                {/* <!-- image logo 
                        <div class="logo">
                        <a href="index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
                        </a>
                        </div>--> */}
                {/* <!-- //image logo --> */}

                <div class="logo-icon text-center">
                    <Link to="/"> <img src={Logo}/>  </Link>
                </div>
                {/* <!-- //logo end --> */}

                <div class="sidebar-menu-inner">

                    {/* <!-- sidebar nav start --> */}
                    <ul class="nav nav-pills nav-stacked custom-nav">
                        <li><Link to="/"><i class="fa fa-tachometer"></i><span> Dashboard</span> </Link>
                        </li>
                        <li><Link to="/cards"><i class="fa fa-cogs"></i> <span>Default cards</span> </Link> </li>
                        <li><Link to="/pricing"><i class="fa fa-table"></i> <span>Pricing tables</span> </Link> </li>
                        <li><Link to="/blocks"><i class="fa fa-th"></i> <span>Content blocks</span> </Link> </li>
                        <li><Link to="/forms"><i class="fa fa-file-text"></i> <span>Forms</span> </Link> </li>
                    </ul>
                    {/* <!-- //sidebar nav end -->
<!-- toggle button start --> */}
                    <a class="toggle-btn" onclick="toggleMenu()">
                        <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                    {/* <!-- //toggle button end --> */}
                </div>
            </div>
            {/* <!-- //sidebar menu end --> */}

        </>
    )

}

export default Sidebar