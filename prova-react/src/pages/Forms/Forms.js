import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/template/Sidebar'
import Footer from '../../components/template/Footer/Footer'
import Header from '../../components/template/Header/Header'

import '../Forms/Forms.css'

function Forms(props) {

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
                        <Sidebar />
                        {/* <!-- toggle button start --> */}
                        
                        <Header/>
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
                                <li class="breadcrumb-item active" aria-current="page"> Forms </li>
                            </ol>
                        </nav>
                        {/* <!-- //breadcrumbs --> */}
                        {/* <!-- forms --> */}
                        <section class="forms">
                            {/* <!-- forms 1 --> */}
                            <div class="card card_border py-2 mb-4">
                                <div class="cards__heading">
                                    <h3>Forms <span></span></h3>
                                </div>
                                <div class="card-body">
                                    <form action="#" method="post">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="input__label">Email address</label>
                                            <input type="email" class="form-control input-style" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                                anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1" class="input__label">Password</label>
                                            <input type="password" class="form-control input-style" id="exampleInputPassword1"
                                                placeholder="Password" />
                                        </div>
                                        <div class="form-check check-remember check-me-out">
                                            <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1" />
                                            <label class="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-style mt-4">Submit</button>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- //forms 1 --> */}

                            {/* <!-- forms 2 --> */}
                            <div class="card card_border py-2 mb-4">
                                <div class="card-body">
                                    <form action="#" method="post">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4" class="input__label">Email</label>
                                                <input type="email" class="form-control input-style" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" class="input__label">Password</label>
                                                <input type="password" class="form-control input-style" id="inputPassword4" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress" class="input__label">Address</label>
                                            <input type="text" class="form-control input-style" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress2" class="input__label">Address 2</label>
                                            <input type="text" class="form-control input-style" id="inputAddress2"
                                                placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCity" class="input__label">City</label>
                                                <input type="text" class="form-control input-style" id="inputCity" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputState" class="input__label">State</label>
                                                <select id="inputState" class="form-control input-style">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputZip" class="input__label">Zip</label>
                                                <input type="text" class="form-control input-style" id="inputZip" />
                                            </div>
                                        </div>
                                        <div class="form-check check-remember check-me-out">
                                            <input class="form-check-input checkbox" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label checkmark" for="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-style mt-4">Sign in</button>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- //forms 2 --> */}



                        </section>
                        {/* <!-- //forms --> */}
                        {/* </section> */}
                        {/* <!-- //forms  --> */}

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
      if(hasCollapsed) {
       body.classList.remove("sidebar-menu-collapsed");
       body.classList.add("noscroll");
      } else {
        body.classList.remove("noscroll");
        body.classList.add("sidebar-menu-collapsed");
      };
    }
    
  </script> */}

        </body>

        </html >

        </>
    )

}

export default Forms