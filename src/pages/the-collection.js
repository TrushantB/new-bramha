import React from "react"

class TheCollection extends React.Component{
    render(){
        return(
            <>
                <div className="TheCollection">
                    <header>
                        <button href="#" className="btn btn-info btn-lg cta-open"><span>Enquiry</span></button>
                        <section className="toggle-form">
                            <nav className="formwrap" role="navigation">
                                <div className="icon-close pos-a">
                                    <i className="fas fa-times"></i>
                                </div>
                                <div>
                                    <div className="form-container content">

                                        <div id="success_message" className="alert alert-success" style={{display:'none'}}>
                                            <strong>Form submitted successfully!</strong> 
                                            <p className="mb-0"> We will get back to you soon. </p>
                                        </div>

                                        <form method="POST" action="php/process.php">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" required id="name" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
                                            </div>

                                            <div className="form-group">
                                                <input id="email" type="email" name="email" required className="form-control" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                                            </div>

                                            <div className="form-group">
                                                <input id="phone" type="tel" min="10" name="contact" required className="form-control drawer-phone" aria-describedby="phoneHelp" placeholder="Enter Your Phone Number"/>
                                            </div>

                                            <div className="form-group">
                                                <label for="message">Message:</label>
                                                <textarea id="message" name="message" rows="10" maxLength="6000" className="form-control" placeholder="Enter Your Message"></textarea>
                                            </div>

                                            <div className="form-group">
                                                <input name="form_type" type="hidden" id="form_type" value="Brochure Enquiry" required="" className="form-control" 
                                                style={{fontFamily:'sans-serif'}} />
                                            </div>

                                            <div className="utm_campaign">
                                                <input type="hidden" name="utm_campaign" id="utm_campaign" value="" />
                                            </div>

                                            <div className="source">
                                                <input type="hidden" name="utm_source" id="utm_source" value="" />
                                            </div>

                                            <div className="utm_medium">
                                                <input type="hidden" name="utm_medium" id="utm_medium" value="" />
                                            </div>
                                        
                                            <button className="btn btn-primary float-right" name="sub" type="submit">Submit</button>
                                        </form>

                                        <div id="error_message" style={{width:'100%', height:'100%', display:'none'}}>
                                            <h3>Error</h3> Sorry there was an error sending your form. 
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="toggle-bg"></div>
                        </section>
                    </header>

                    <main className="main-wrapper" id="menu-wrapper" role="main">
                    {/* <!-- Header section start here--> */}
                        <header>
                            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-black">
                                <a className="navbar-brand" href="#home">
                                    <img src="./assets/images/logo.png" height="32" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse ml-auto" id="navbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#project">The Project</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#showcase">Showcase</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#amenities">Amenities</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#location">Location</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">Contact</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#about">About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bramha-tel button d-sm-none d-xs-none d-md-block">
                                    <a href="tel:+919014260000" className="bramha-tel shadow">
                                        <i className="fas fa-phone fa-rotate-90"></i>
                                        <span>+91 9014 260 000</span>
                                    </a>
                                </div>
                            </nav>
                        </header>
                        {/* <!-- Header section end here--> */}


                        {/* <!-- banner section start here--> */}
                        <section className="banner">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                {/* <!--<ol className="carousel-indicators">-->
                                <!--    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>-->
                                <!--    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>-->
                                <!--    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>-->
                                <!--</ol>-->
                                
                                <!--<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">-->
                                <!--    <span className="carousel-control-prev-icon" aria-hidden="true"></span>-->
                                <!--    <span className="sr-only">Previous</span>-->
                                <!--</a>-->
                                <!--<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">-->
                                <!--    <span className="carousel-control-next-icon" aria-hidden="true"></span>-->
                                <!--    <span className="sr-only">Next</span>-->
                                <!--</a>--> */}
                                
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{backgroundImage:'url(assets/images/TC.jpg)', backgroundSize:'cover', backgroundPosition:'right'}}>
                                        <div className="carousel-caption">
                                            <h2>
                                            </h2>
                                            <a href="#"> Know More</a>
                                        </div>
                                    </div>
                                    {/* <!--<div className="carousel-item" style="background:url(assets/images/2.jpg) right; background-size: cover; ">-->
                                    <!--    <div className="carousel-caption">-->
                                            <!--<h2>-->
                                            <!--    Home to India’s Fashion Moguls-->
                                            <!--</h2>-->
                                    <!--        <a href="#"> Know More</a>-->
                                    <!--    </div>-->
                                    <!--</div>-->
                                    <!--<div className="carousel-item" style="background:url(assets/images/3.jpg) right; background-size: cover; ">-->
                                    <!--    <div className="carousel-caption">-->
                                            <!--<h2>-->
                                            <!--    Irresistible Homes Only for A Privileged Few-->
                                            <!--</h2>-->
                                    <!--        <a href="#"> Know More</a>-->
                                    <!--    </div>-->
                                    <!--</div>--> */}
                                </div>
                            </div>
                        </section>
                        {/* <!-- banner section end here--> */}

                        {/* <!-- collection & showcase section start here--> */}
                        <section className="collection-showcase-wrapper" id="project">
                            <div className="collection-section container content-section" style={{paddingTop:'50px !important'}}>
                                <div className="row">
                                    <div className="col-lg-8 " style={{paddingTop:'40px'}}>
                                        <video width="100%" poster="assets/images/vidthumb.jpg" controls>
                                            <source src="assets/images/videohd.mp4" type="video/mp4" />
                                            <source src="assets/images/videohd.mp4" type="video/mp4" />
                                        </video>
                                        {/* <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/dQG_o18_VCE-->
                                        <!--?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                                        <!--<iframe width="770" height="570" src="https://www.youtube.com/embed/dQG_o18_VCE"-->
                                        <!--frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>--> */}
                                    </div>
                                    <div className="col-lg-4 collection__details">
                                        <div className="px-3">
                                            <h2 className="collection__title">
                                                <span>THE</span> COLLECTION
                                            </h2>
                                            <hr />
                                            <p className="text-center">New Kalyani Nagar, Pune</p>

                                            {/* <!-- <p className="collection__furnishedby"> furnished by </p>
                                            <h2 className="collection__sub-title">
                                            BENTLEY
                                            <span>HOME</span>
                                            </h2>
                                            <img src="assets/images/collection.png" alt=" The collection image"> --> */}

                                            <p className="collection__description pt-5">
                                                Our quest to set new landmarks has led to the creation of the Grandest Designer Landmark in Pune. The Collection is thoughtfully designed for those who cherish style. It is skilfully crafted to keep the homeowners a step ahead of lifestyle. The Collection,
                                                now shaping up at New Kalyani Nagar, Pune will be the new address of fashion moguls.
                                            </p>
                                            <p className="collection__description">
                                                <strong>
                                                    2 & 3 BHK Irresistible Homes<br />
                                                    Starting from Rs. 87.70 Lakh (All Incl.)
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            {/* <!-- <div className="new offset-3" style="padding-top: 26px;">-->
                            <!--    <p style="color:#ffffff !important; font-size: 16px;"><strong>Take a Sensible Decision By Booking Home Online!</strong></p>-->
                            <!--    <p style="color:#af9f68 !important; font-size: 16px;">3 Simple Steps to Upgrade Your Lifestyle</p>-->
                            <!--    <div className="new1" style="margin-left:36px;">-->
                            <!--    <p style="color:#af9f68 !important; font-size: 16px;">1.&nbsp;Contact us to Select your Unit</p>-->
                            <!--    <p style="color:#af9f68 !important; font-size: 16px;">2.&nbsp;Book your Ultra – Luxe Home by Paying Just Rs. 50,000</p>-->
                            <!--    <p style="color:#af9f68 !important; font-size: 16px;">3.&nbsp;Get Rs. 50,000* Cashback on Agreement</p>-->
                            <!--   </div>-->
                            <!--    <p style="color:#af9f68 !important; font-size: 15px;">100% refund if you choose to withdraw within 30 days.</p>-->
                            
                            <!--</div>--> */}
            
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="./assets/images/TC_LandingPage1.png" width="100%"/>
                                    </div>
                                    <div className="col-md-6" >
                                        <img src="./assets/images/TC_LandingPage2.png" className="new"/>
                                    </div>
                                </div>
                            </div>
            
                            <div className="showcase-section container content-section" id="showcase">
                                <div className="row">
                                    <div className="col-md-4 showcase__text">
                                        <div className="showcase__title">
                                            <h2 className="text-center">
                                                SHOWCASE
                                            </h2>
                                            <hr />
                                            <p className="collection__description pt-2">You might wonder if our Experience Centre is so breathtaking, how splendid will be the home. These visuals give you the glimpse of lifestyle at The Collection.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="slick-carousel" id="lightgallery">
                                            <div className="slide-content" data-src="./assets/images/showcase/1.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/1.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                            <div className="slide-content" data-src="./assets/images/showcase/2.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/2.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                            <div className="slide-content" data-src="./assets/images/showcase/3.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/3.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                            <div className="slide-content" data-src="./assets/images/showcase/4.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/4.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                            <div className="slide-content" data-src="./assets/images/showcase/5.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/5.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                            <div className="slide-content" data-src="./assets/images/showcase/6.png" data-download-url="false">
                                                <span className="shot-at">SHOT AT EXPERIENCE CENTER</span>
                                                <img src="./assets/images/showcase/6.png" className="w-100" alt="SHOT AT EXPERIENCE CENTER" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- collection & showcase section end here--> */}

                        {/* <!-- Amenities section start here--> */}
                        <section className="amenities-section container content-section" id="amenities">
                            <div className="row">
                                <div className="col-md-4 amenities__text order-md-2">
                                    <div className="amenities__title">
                                        <h2 className="text-center">
                                            Amenities
                                        </h2>
                                        <hr />
                                        <p className="collection__description pt-2">When the interior is unparalleled, the exterior cannot be less. Which is why, we have matched the amenities to your aspirations of a unique lifestyle</p>
                                    </div>
                                </div>

                                <div className="col-md-8 amenities__icons order-md-1">
                                    <div className="amenities-icon__wrapper">
                                        <div className="amenitis__img text-center d-flex flex-wrap justify-content-center">
                                            <div>
                                                <img src="./assets/images/amenities_icons/entrance_lobby.png" width="90" />
                                                <h4 className="mt-4">entrance<br />lobby</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/swimming_pool.png" width="90" />
                                                <h4 className="mt-4">swimming<br />pool</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/kids_play_area.png" width="90" />
                                                <h4 className="mt-4">kid's play<br />area</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/gymnasium.png" width="90" />
                                                <h4 className="mt-4">gymnasium</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/amphithetre.png" width="90" />
                                                <h4 className="mt-4">amphitheatre</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/multipurpose_court.png" width="90" />
                                                <h4 className="mt-4">multipurpose<br />court</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/multipurpose_hall.png" width="90" />
                                                <h4 className="mt-4">multipurpose<br />hall</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/yoga_room.png" width="90" />
                                                <h4 className="mt-4">yoga / aerobics<br />room</h4>
                                            </div>
                                            <div>
                                                <img src="./assets/images/amenities_icons/jogging_track.png" width="90" />
                                                <h4 className="mt-4">jogging<br />track</h4>
                                            </div>
                                        </div>
                                    {/* <!-- <div className="icon">
                                            <img src="assets/images/entrance_lobby.png" alt="entrance lobby icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/swimming_pool.png" alt="swimming pool icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/kids_play_area.png" alt="kids play area icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/gymnasium.png" alt="gymnasium icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/amphithetre.png" alt="amphithetre icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/multipurpose_hall.png" alt="multipurpose_hall icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/multipurpose_court.png" alt="multipurpose_court icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/yoga_room.png" alt="yoga_room icon">
                                        </div>
                                        <div className="icon">
                                            <img src="assets/images/jogging_track.png" alt="jogging_track icon">
                                        </div> --> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Amenities section end here--> */}

                        {/* <!-- Factfile section start here--> */}
                        <section className="fact-file-wrapper container d-none content-section">
                            <div className="row">
                                <div className="col-sm-4 fact-file__title-wrapper">
                                    <div className="fact-file__title">
                                        <h2>
                                            FACT FILE
                                        </h2>
                                        <hr />
                                    </div>

                                </div>
                                <div className="col-sm-4 fact-file__description">
                                    <h3>FLOORING</h3>
                                    <p>
                                        • Vitrified tiles in all rooms
                                    </p>
                                    <h3>WASH & DRY BALCONY</h3>
                                    <p>
                                        • Utility area with provision of electrical & plumbing point for washing machine.
                                    </p>
                                    <h3>KITCHEN</h3>
                                    <p>
                                        • Granite top kitchen platform. • Dado tiles above granite platform up to 2’0’’ height. • Provision of electrical point for exhaust fan. • Modular Kitchen trolleys below kitchen platform.
                                    </p>
                                </div>
                                <div className="col-sm-4 fact-file__description">
                                    <h3>TOILETS</h3>
                                    <p>
                                        • Cera/Grohe/Jaquar or equivalent Sanitary ware & CP fittings in all toilets. • Provision of electrical point for exhaust fan. • Provision of electrical & plumbing point for geyser
                                    </p>
                                    <h3>ELECTRIFICATION</h3>
                                    <p>
                                        • T.V, Telephone & Internet point in living room. • Provision of electrical point for inverter
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Factfile section end here--> */}

                        {/* <!-- Proximites & location section start here--> */}
                        <section className="pro-loc-wrapper container content-section" id="location">
                            <div className="row">
                                <div className="col-md-6 proximites__wrapper">
                                    <div className="proximites__title text-center text-md-left">
                                        <h2>
                                            PROXIMITIES
                                            <hr />
                                        </h2>
                                        <p className="collection__description py-2 text-left">New Kalyani Nagar’s strategic location is one of the emerging real estate destination situated on the Eastern Corridor of Pune, and between Koregaon Park and Viman Nagar.</p>
                                    </div>
                                    <div className="proximites__description">
                                        <h3>IMPORTANT PLACES</h3>
                                        <p>
                                            Pune International Airport<span className="mx-2 sep">|</span>Koregaon Park<span className="mx-2 sep">|</span>Viman Nagar<span className="mx-2 sep">|</span>Kharadi
                                        </p>
                                        <h3>HOTELS</h3>
                                        <p>
                                            Hyatt Regency<span className="mx-2 sep">|</span>Hotel Novotel<span className="mx-2 sep">|</span>The Westin
                                        </p>
                                        <h3>MALLS</h3>
                                        <p>
                                            Phoenix Market City Mall<span className="mx-2 sep">|</span>Inorbit Mall<span className="mx-2 sep">|</span>Marigold Mall
                                        </p>
                                        <h3>EDUCATIONAL INSTITUTES</h3>
                                        <p>
                                            Symbiosis College<span className="mx-2 sep">|</span>Bishops School<span className="mx-2 sep">|</span>Arnold’s School
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 our-location__wrapper flex-column d-flex">
                                    <div className="our-location__title">
                                        <h2>
                                            Our Location
                                        </h2>
                                        <hr />
                                    </div>
                                    <div className="map flex-grow-1">
                                        {/* <!--<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.551797328197!2d73.91401871512848!3d18.549145587392363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzU2LjkiTiA3M8KwNTQnNTguNCJF!5e0!3m2!1sen!2sin!4v1566444753461!5m2!1sen!2sin"-->
                                        <!--    width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>--> */}
                                            
                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.551509348292!2d73.91399651489316!3d18.54915858739237!
                                        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1afef5f0ceb%3A0xe8e71a1af02e71ae!2sThe%20Collection%20By%20BramhaCorp!
                                        5e0!3m2!1sen!2sin!4v1593212471065!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Proximites & location section end here--> */}
        
                        <footer className="footer-section container content-section" id="contact">
                            <div className="row">
                                <div className="col-md-6 site-address">
                                    <div className="footer__title">
                                        <h2>
                                            SITE ADDRESS
                                        </h2>
                                        <hr />
                                    </div>
                                    <address className="mb-0 mt-4">
                                        The Collection,
                                        Next to f-Residences,<br />
                                        New Kalyani Nagar,
                                        Pune - 411014
                                    </address>
                                    <p className="mb-0 mt-2">
                                        Phone: <a href="tel:+919014260000">+91 9014 260 000</a>
                                    </p>
                                    <img src="./assets/images/Maha.png" width="22%" style={{padding:'8px'}}/>
                                    <p>MahaRera Number P52100022019 | P52100022277 | P52100022048 available at website <a href="maharera.mahaonline.gov.in" style={{color:'blue'}}>maharera.mahaonline.gov.in</a></p>
                                </div>
                                
                                <div className="col-md-6 download-brouchure">
                                    <div className="footer__title mb-4">
                                        <h2>
                                            ENQUIRE NOW
                                        </h2>
                                        <hr />
                                    </div>
                                    <div>
                                        <div className="form-container">
                                            <div id="success_message" style={{display:'none'}}>
                                                <h3>Submitted the form successfully!</h3>
                                                <p> We will get back to you soon. </p>
                                            </div>
                                            <form >
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" required id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                                </div>

                                                <div className="form-group">
                                                    <input id="email" type="email" name="email" required className="form-control" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                                </div>

                                                <div className="form-group">
                                                    <input data-validation="number" id="phone" type="tel" min="10" name="contact" required className="form-control footer-phone" aria-describedby="phoneHelp" placeholder="Enter Your Phone Number" />
                                                </div>

                                                <div className="form-group">
                                                    <textarea id="message" name="message" rows="3" maxLength="6000" className="form-control" placeholder="Enter Your Message"></textarea>
                                                </div>

                                                <input name="form_type" type="hidden" id="form_type" value="Enquiry Form" required="" className="form-control"  
                                                style={{fontFamily:'sans-serif'}} />
                                                <div className="source">
                                                    <input type="hidden" name="utm_source" value="" />
                                                </div>
                                                <div className="utm_medium">
                                                    <input type="hidden" name="utm_medium" value="" />
                                                </div>
                                                <div className="utm_campaign">
                                                    <input type="hidden" name="utm_campaign" value="" />
                                                </div>
                                                <button className="btn btn-primary" name="sub" type="submit">Submit</button>
                                            </form>
                                                <div id="error_message" style={{width:'100%', height: '100%', display:'none'}}>
                                                <h3>Error</h3> Sorry there was an error sending your form. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                        <div className="about-section" id="about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 showcase__text">
                                        <div className="showcase__title">
                                            <h2 className="text-center">
                                                About
                                            </h2>
                                            <hr />
                                            <p className="collection__description pt-2 text-uppercase">pioneering the pune real estate market since 1982 <br /> from the promoter of</p>

                                            <div className="promoters">
                                                <div className="l1">
                                                    <img className="img-fluid" src="assets/images/l1.png" />
                                                </div>
                                                <div className="l2">
                                                    <img className="img-fluid" src="assets/images/l2.png" />
                                                </div>
                                                <div className="l3">
                                                    <img className="img-fluid" src="assets/images/l3.png" />
                                                </div>
                                                <div className="l4">
                                                    <img className="img-fluid" src="assets/images/l4.png" />
                                                </div>
                                                <div className="l5">
                                                    <img className="img-fluid" src="assets/images/l5.png" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="maharera__footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="left d-none">
                                            <div className="maharera-logo">
                                                <img src="assets/images/maharera-logo.jpg" alt=" Maharere logo" />
                                            </div>
                                            <div className="maharera-title">
                                                <h2>MahaRERA No: P52100017050</h2>
                                                <p>Website:<a href="https://maharera.mahaonline.gov.in/">maharera.mahaonline.com</a></p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <p>
                                                <span>IMPORTANT NOTE –</span>
                                                <strong>The above show apartment image/s is/are part of ‘Premium Version which includes Bentley Home Furniture’ at an extra cost.</strong> The subject project identified as <em>‘THE COLLECTION – RESIDENTIAL W1’</em> has
                                                been registered under MahaRERA Registration No. P52100022019 and details are available on the MAHARERA website ‘https://maharerait.mahaonline.gov.in’. The subject Phase is registered for identified floors of proposed W1
                                                Building of <em>‘THE COLLECTION’</em> Project. The above mentioned registered part of the W1 Building is only offered for sale and the entire Project <em>‘THE COLLECTION’</em> as shown in the advertisement is not offered
                                                for sale. The subject project under this correspondence includes <em>“Tower W1, of THE COLLECTION having residential Apartment starting from 3rd floor up to 18th floor”. These Apartments from the sanctioned project are only advertised and offered for sale under this correspondence and no other part/s from THE COLLECTION project is offered.</em>                                The interested persons shall take a humble note that, the Promoters have planned the development of Apartments within ‘The COLLECTION’ project in two Versions identified as ‘STANDARD’ and ‘PREMIUM’ and both versions are
                                                having different specifications, interior works, which varies the cost of both Versions. The details of the difference in specifications between PREMIUM and STANDARD Version Apartments and costs for both types of apartments
                                                are completely different and needs to be checked with Sales Office before purchasing the Apartment. The other vertical and horizontal attached and continuous part of <em>THE COLLECTION</em> project will get registered as
                                                separate projects and those vertical and horizontal building sections of <em>THE COLLECTION</em> project are not part and parcel of present project for which this advertisement and correspondence is issued. This clarification
                                                is issued as per provisions mentioned in the Real Estate (Regulation and Development) Act, 2016, to avoid any kind of loss or damage to any person and to disclose true and correct information about registered project. For
                                                any queries of difficulties or for better understanding you are requested to contact the Promoter’s address with prior appointment and intimation. *Terms & Conditions Apply
                                            </p>
                                        </div>
                                        {/* <!--<div className="right">-->
                                        <!--    <p>-->
                                        <!--        <span><u>IMPORTANT NOTE –</u></span>-->
                                        <!--       <strong>The above show apartment image/s is/are part of ‘Premium Version which includes Bentley Home Furniture’ at an extra cost.</strong>-->
                                        <!--        The subject projects identified as<em> ‘THE COLLECTION – RESIDENTIAL W1’ -</em> MAHARERA Registration No. P52100022019, ‘THE COLLECTION - RESIDENTIAL W8’ --->
                                        <!--        MAHARERA Registration No. P52100022277, ‘THE COLLECTION COMMERCIAL W1’ - MAHARERA Registration No. P52100022048; details of which are available on-->
                                        <!--        the MAHARERA website ‘https://maharera.mahaonline.gov.in’. Only sanctioned <em>Apartments from these Projects are offered for sale under-->
                                        <!--        this correspondence and no other part/s from THE COLLECTION project is offered.</em> Concerned persons shall take a note that, the Promoters -->
                                        <!--        have planned the development of Apartments within ‘The COLLECTION’ project in two Versions identified as ‘STANDARD’ and ‘PREMIUM’ and -->
                                        <!--        both versions are having different specifications, interior works, which varies the cost of both Versions. The details of the difference-->
                                        <!--        in specifications between PREMIUM and STANDARD Version Apartments and costs for both types of apartments are completely different and needs -->
                                        <!--        to be checked with Sales Office before purchasing the Apartment. The other vertical and horizontal attached and continuous part of-->
                                        <!--       <em> THE COLLECTION</em> project will get registered as separate projects and those vertical and horizontal building sections of <em>THE COLLECTION </em>-->
                                        <!--        project are not part and parcel of present project for which this advertisement and correspondence is issued. This clarification is issued -->
                                        <!--        as per provisions mentioned in the Real Estate (Regulation and Development) Act, 2016, to avoid any kind of loss or damage to any person and-->
                                        <!--        to disclose true and correct information about registered project. For any queries of difficulties or for better understanding you are requested-->
                                        <!--        to contact the Promoter’s address with prior appointment and intimation. *Terms & Conditions Apply-->
                                        <!--    </p>-->
                                        <!--</div>--> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="copyright-footer text-center">
                            BramhaCorp Ltd &copy; 2019. All Rights Reserved. | <a href="https://www.bramhacorp.in/privacy-policy/">Privacy Policy</a>
                        </footer>
                    </main>
                    <a className="shadow rounded-circle position-fixed d-flex justify-content-center align-items-center whatsapp-link" href="http://wa.me/917030500002?text=Hello,%20I%20am%20interested%20in%20The%20Collection%20property" target="_blank"><i className="fab fa-whatsapp"></i></a>
                </div>
            </>
        )
    }
}


export default TheCollection;