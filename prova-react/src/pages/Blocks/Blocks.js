import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/template/Sidebar'
import Footer from '../../components/template/Footer/Footer'
import Header from '../../components/template/Header/Header'

// Importando imagens:
import Template1Image from '../../assets/images/template1.jpg' 
import Template2Image from '../../assets/images/template2.jpg' 

import '../Blocks/Blocks.css'


function Blocks(props) {

    return(
        <>
        
        <html lang="en">

                <head>
                    {/* <!-- Required meta tags --> */}
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Collective Admin Panel a Flat Bootstrap Responsive Website Template | Pricing :: W3Layouts</title>

                    {/* <!-- Bootstrap CSS --> */}
                    
                </head>

                <body class="sidebar-menu-collapsed">
                    {/* <!-- <div class="se-pre-con"></div> --> */}
                    <section>
                        <Sidebar/>
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
                                        <li class="breadcrumb-item active" aria-current="page"> Content Block </li>
                                    </ol>
                                </nav>
                                {/* <!-- //breadcrumbs --> */}

        {/* <!-- card heading --> */}
        <div class="cards__heading">
          <h3>Content Blocks</h3>
        </div>
        {/* <!-- //card heading --> */}

        {/* <!-- content block style 1--> */}
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <div class="row">
              <div class="col-lg-6 align-self pr-lg-4">
                <h3 class="block__title mb-lg-4">About Content Block</h3>
                <p class="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis. </p>
                <p class="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                <a href="#read" class="btn btn-style btn-primary"> Read More</a>
              </div>
              <div class="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                <img src={Template2Image} alt="" class="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //content block style 1--> */}

        {/* <!-- content block style 2--> */}
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <div class="row">
              <div class="col-lg-6 pr-lg-4">
                <img src={Template1Image} alt="" class="img-fluid rounded" />
              </div>
              <div class="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
                <h3 class="block__title mb-lg-4">Content Block with 2 buttons</h3>
                <p class="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                  sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                <p class="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis.</p>
                <a href="#read" class="btn btn-style btn-primary mr-2"> Read More</a>
                <a href="#more" class="btn btn-style border-btn"> Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //content block style 2--> */}

        {/* <!-- content block style 6 --> */}
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">Content Block Features</h3>
            <div class="row feature-3 text-center">
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Web Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                <a href="#" class="actionbg">Read More</a>
              </div>
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Graphic Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </div>
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-signal icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Web Development</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //content block style 6 --> */}

        {/* <!-- content block style 7 --> */}
        <div class="w3l-about1 card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">Content Block Features with photo</h3>
            <div class="row cwp23-content">
              <div class="col-md-6 cwp23-text">
                <div class="row cwp23-text-cols">
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                    <a href="#url">Web design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                    <a href="#url">Graphic design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-signal icon-fea" aria-hidden="true"></span>
                    <a href="#url">Web development</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                    <a href="#url">Webdesign</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mt-md-0 mt-5 cwp23-img">
                <img src={Template2Image} class="img-fluid rounded" alt=""/>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //content block style 7 --> */}

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

</html>

        </>
    )

}

export default Blocks