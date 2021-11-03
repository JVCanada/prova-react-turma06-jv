import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/template/Sidebar'
import Footer from '../../components/template/Footer/Footer'

import '../Pricing/Pricing.css'

function Pricing(props) {

    return(
        <>
        
            <html lang="en">

                <head>
                    {/* <!-- Required meta tags --> */}
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Collective Admin Panel a Flat Bootstrap Responsive Website Template | Pricing :: W3Layouts</title>

                    
                </head>

                <body class="sidebar-menu-collapsed">
                    {/* <!-- <div class="se-pre-con"></div> --> */}
                    <section>
                        <Sidebar/>
    {/* <!-- header-starts --> */}
                        <div class="header sticky-header">

                            {/* <!-- notification menu start --> */}
                            <div class="menu-right">
                                <div class="navbar user-panel-top">
                                    <div class="search-box">
                                        <form action="#search-results.html" method="get">
                                            <input class="search-input" placeholder="Search Here..." type="search" id="search" />
                                            <button class="search-submit" value=""><span class="fa fa-search"></span></button>
                                        </form>
                                    </div>
                                    <div class="profile_details">
                                        <ul>
                                            <li class="dropdown profile_details_drop">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <div class="profile_img">
                                                        <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                                                        <div class="user-active">
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                                    <li class="user-info">
                                                        <h5 class="user-name">John Deo</h5>
                                                        <span class="status ml-2">Available</span>
                                                    </li>
                                                    <li> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </li>
                                                    <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li>
                                                    <li> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </li>
                                                    <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li>
                                                    <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--notification menu end --> */}
                        {/* </div> */}
                        {/* <!-- //header-ends -->
    <!-- main content start --> */}
                        <div class="main-content">
                            {/* <!-- content --> */}
                            <div class="container-fluid content-top-gap">
                                {/* <!-- breadcrumbs --> */}
                                <nav aria-label="breadcrumb" class="mb-4">
                                    <ol class="breadcrumb my-breadcrumb">
                                        <li class="breadcrumb-item"> <Link to="/"> Home </Link> </li>
                                        <li class="breadcrumb-item"><Link to="/"> Elements </Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Pricing Tables</li>
                                    </ol>
                                </nav>
                                {/* <!-- //breadcrumbs --> */}

                                {/* <!-- pricing --> */}
                                <section class="pricing">
                                    <div class="card card_border mb-5">
                                        <div class="cards__heading">
                                            <h3>Pricing Tables -<span> Version 1</span></h3>
                                        </div>
                                        <div class="card-body">
                                            {/* <!-- pricing version 1 --> */}

                                            {/* <!--//BLOCK ROW END--> */}

                                            <section class="w3l-pricing1">
                                                <div class="row px-2">
                                                    <div class="col-md-4 px-2">
                                                        <div class="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                                                            <div class="card-header p-0 card-heading">
                                                                <h4 class="mb-4">Free</h4>
                                                            </div>
                                                            <div class="card-body p-0">
                                                                <h1 class="card-title pricing-card-title my-price-title">$0<small
                                                                    class="text-dull">/month</small>
                                                                </h1>
                                                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                                <ul class="list-unstyled list-pricing mt-3 mb-4">
                                                                    <li>1 Domain</li>
                                                                    <li>10 users included</li>
                                                                    <li>2 GB of storage</li>
                                                                    <li>Email support</li>
                                                                    <li>Help center access</li>
                                                                </ul>
                                                                <div class="mt-4">
                                                                    <a href="signup.html" class="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                                                                        free</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 px-2">
                                                        <div class="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                                                            <div class="card-header p-0 card-heading">
                                                                <h4 class="mb-4">Regular <span class="label label-popular">Popular</span></h4>
                                                            </div>
                                                            <div class="card-body p-0">
                                                                <h1 class="card-title pricing-card-title my-price-title">$49<small
                                                                    class="text-dull">/month</small>
                                                                </h1>
                                                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                                <ul class="list-unstyled list-pricing mt-3 mb-4">
                                                                    <li>10 Domain</li>
                                                                    <li>20 users included</li>
                                                                    <li>10 GB of storage</li>
                                                                    <li>Priority email support</li>
                                                                    <li>Help center access</li>
                                                                </ul>
                                                                <div class="mt-4">
                                                                    <a href="#" class="btn btn-lg btn-primary btn-style">Get started</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 px-2">
                                                        <div class="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                                                            <div class="card-header p-0 card-heading">
                                                                <h4 class="mb-4">Premium</h4>
                                                            </div>
                                                            <div class="card-body p-0">
                                                                <h1 class="card-title pricing-card-title my-price-title">$199<small
                                                                    class="text-dull">/month</small>
                                                                </h1>
                                                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                                <ul class="list-unstyled list-pricing mt-3 mb-4">
                                                                    <li>30 Domain</li>
                                                                    <li>30 users included</li>
                                                                    <li>15 GB of storage</li>
                                                                    <li>Phone and email support</li>
                                                                    <li>Help center access</li>
                                                                </ul>
                                                                <div class="mt-4">
                                                                    <a href="#" class="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>



                                    {/* <!--BLOCK ROW START--> */}

                                    {/* <!-- //pricing version 1 --> */}

                                    {/* <!-- pricing version 2 --> */}
                                    <div class="pricing-version-2">
                                        <div class="card card_border mb-5">
                                            <div class="cards__heading">
                                                <h3>Pricing Tables -<span> Version 2</span></h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="row px-2">

                                                    {/* <!-- Table #1  --> */}
                                                    <div class="col-lg-4 col-md-6 px-2 mb-4">
                                                        <div class="card text-center card__hover">
                                                            <div class="card-header">
                                                                <h3 class="display-4"><span class="currency">$</span>19<span class="period">/month</span></h3>
                                                            </div>
                                                            <div class="card-block">
                                                                <h4 class="card-title">
                                                                    Basic Plan
                                                                </h4>
                                                                <ul class="list-group">
                                                                    <li class="list-group-item">1 Domain</li>
                                                                    <li class="list-group-item">Ultimate Features</li>
                                                                    <li class="list-group-item">Responsive Ready</li>
                                                                    <li class="list-group-item">Editor Ready Builder</li>
                                                                    <li class="list-group-item">Limited UI Blocks</li>
                                                                    <li class="list-group-item">24/7 Support System</li>
                                                                </ul>
                                                                <a href="#" class="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Table #2  --> */}
                                                    <div class="col-lg-4 col-md-6 px-2 mb-4">
                                                        <div class="card text-center card__hover">
                                                            <div class="card-header">
                                                                <h3 class="display-4"><span class="currency">$</span>29<span class="period">/month</span></h3>
                                                            </div>
                                                            <div class="card-block">
                                                                <h4 class="card-title">
                                                                    Regular Plan
                                                                </h4>
                                                                <ul class="list-group">
                                                                    <li class="list-group-item">10 Domain</li>
                                                                    <li class="list-group-item">Ultimate Features</li>
                                                                    <li class="list-group-item">Responsive Ready</li>
                                                                    <li class="list-group-item">Editor Ready Builder</li>
                                                                    <li class="list-group-item">Unlimited UI Blocks</li>
                                                                    <li class="list-group-item">24/7 Support System</li>
                                                                </ul>
                                                                <a href="#" class="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Table #3  --> */}
                                                    <div class="col-lg-4 col-md-6 px-2 mb-4">
                                                        <div class="card text-center card__hover">
                                                            <div class="card-header">
                                                                <h3 class="display-4"><span class="currency">$</span>39<span class="period">/month</span></h3>
                                                            </div>
                                                            <div class="card-block">
                                                                <h4 class="card-title">
                                                                    Premium Plan
                                                                </h4>
                                                                <ul class="list-group">
                                                                    <li class="list-group-item">15 Domain</li>
                                                                    <li class="list-group-item">Ultimate Features</li>
                                                                    <li class="list-group-item">Responsive Ready</li>
                                                                    <li class="list-group-item">Editor Ready Builder</li>
                                                                    <li class="list-group-item">Unlimited UI Blocks</li>
                                                                    <li class="list-group-item">24/7 Support System</li>
                                                                </ul>
                                                                <a href="#" class="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- //pricing version 2 --> */}
                                </section>
                                {/* <!-- //pricing --> */}

                            </div>
                            {/* <!-- //content --> */}

                        </div>
                        {/* <!-- main content end--> */}
                    </section>
                    {/* <!--footer section start--> */}
                    <Footer/>
                    {/* <!--footer section end--> */}

                    {/* <!--abrir e fechar o menu--> */}
                    {/* <script>
        function toggleMenu() {
        let body = document.querySelector("body");
        let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
        if (hasCollapsed) {
            body.classList.remove("sidebar-menu-collapsed");
            body.classList.add("noscroll");
        } else {
            body.classList.remove("noscroll");
            body.classList.add("sidebar-menu-collapsed");
        };
        }

    </script> */}

                </body>

            </html>

        </>
    )

}

export default Pricing