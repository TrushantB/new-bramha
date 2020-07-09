import React from "react"

class VantageTowerPune extends React.Component{
    render(){
        return(
            <>
                <div className="VantageTowerPune">
                    <div class="page-wrapper" rel="stylesheet" href="css/stylesexb.css" type="text/css">
                        <header id="page-header">
                            <nav class="navigation background-is-dark">
                                <div class="container">
                                    <div class="wrapper">
                                        <div class="left exlogo">
                                            <img src="images/vantage-logo.png" alt="Vantage Tower Commercial Offices Bavdhan pashan Road Pune" />
                                        </div>
                                         {/* <!--end left--> */}
                                        <div class="right">
                                            <ul class="nav navigation-links animate">
                                                <li><a href="#page-top" class="scroll">Home</a></li>
                                                <li><a href="#about" class="scroll">About Project</a></li>
                                                <li><a href="#location" class="scroll">Location</a></li>
                                                <li><a href="#gallery" class="scroll">Gallery</a></li>
                                                <li><a href="#contact" class="scroll">Contact</a></li>
                                            </ul>
                                            <div class="nav-btn">
                                                <figure></figure>
                                                <figure></figure>
                                                <figure></figure>
                                            </div>
                                        </div>
                                    {/* <!--end right--> */}
                                    </div>
                                </div>
                                {/* <!--end container--> */}
                            </nav>
                            {/* <!--end navigation--> */}
                            
                            <div class="divheroimage">
                                <div class="heroimage">
                                    <img src="images/vant-elevation01.jpg"/>
                                </div>
                                <div class="artistimp">Artist's Impression</div>
                                    <div class="divherocontent">
                                        <div class="container herotxt">
                                            <h1 class="animate">Smart Office Spaces<br/>Starting from Rs. 67 Lakh*<br/>(Excluding Maintenance)<br/>At Bavdhan-Pashan Road, Pune</h1>
                                            <form method="POST"  enctype="multipart/form-data"  name="formhero" id="formhero">
                                                <label for="form-hero-email">Enter your Phone Number</label>
                                                <div class="">
                                                    <div class="">
                                                        <div id ="divformhero" class="input-group widthinput">

                                                            <input type="hidden" name="countryCode" id="countryCode" value="" />
                                                            <div style="background-color:#FFFFFF"><input type="tel" class="form-control marb10 mart10 phonenumber" id="phoneno" name="phoneno" placeholder="Phone Number*" /></div>
                                                            <input type="text" class="form-control0 mart10 marb10 dispname" id="name" name="name" placeholder="Name*" />
                                                            <input type="text" class="form-control dispemail" id="email" name="email" placeholder="Email ID*" />
                                                        </div>
                                                        {/* <!-- /input-group --> */}
                                                            <div class="btn width120 mart10 bgddark dispphonesubmit" type="submit" onClick="return validatephone();">Submit</div>
                                                            <div class="btn width120 mart10 bgddark dispmainsubmit" type="submit" onClick="return validateheroform();">Submit</div>
                                                            {/* <!--<input type="submit" value="Submit" name="submit" class="sendbutbot2 dispemail" onClick="return validatephone();"/>
                                                            <input type="submit" value="Submit" name="submit" class="sendbutbot2 dispemail" onClick="return validatephone();"/>--> */}
                                                    </div>
                                                </div>
                                            </form>
                                            {/* <!--end form-hero--> */}
                                        </div>
                                        {/* <!--end container--> */}
                                    </div>
                                </div>
                            {/* <!--end divheroimage--> */}
                        </header>
                        {/* <!--end page-header--> */}
                        <div id="page-content">
                            <div class="block" id="about">
                                <div class="container">
                                    <h2>About the project.</h2>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <h3>Connectivity That Spells Convenience</h3>
                                            <p>BramhaCorp Vantage Tower is one of the popular Commercial Developments in the center of the Bavdhan neighborhood of Pune. Here’s where businesses of different sectors and statures find spaces to complement their needs, amplify their assets and raise the limits of success. So belong here. Give your business the sheen it deserves and bask in the attention you’re entitled to.</p>
                                            <ul class="check-marks">
                                                <li>A road touch project in the heart of the commercial district of Bavdhan-Pashan Road</li>
                                                <li>Just off the Mumbai-Pune Westerly Bypass, quick easy access to Hinjewadi</li>
                                            </ul>
                                            {/* <!--end ul--> */}
                                        </div>
                                        {  /* <!--end col-md-6--> */}
                                        {/* <!--end col-md-6--> */}
                                        <div class="col-md-6 col-sm-6 mart10 imgw100"><img src="images/about-project.jpg" alt="vantage tower office spaces in bavdhan pune baner aundh" />
                                            <div class="artistimp">Artist's Impression</div>
                                            {/* <!--end video-player--> */}
                                        </div>
                                        {/* <!--end col-md-6--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                {/* <!--end container--> */}
                            </div>

                          


                        {/* <!--end block--> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default VantageTowerPune;


