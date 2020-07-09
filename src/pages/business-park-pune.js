import React from "react"
class BusinessParkPune extends React.Component{
    render(){
        return(
            <>
                <div className="BusinessParkPune">
                    <input name="pageloadURLHidden" type="hidden" id="pageloadURLHidden" />
                    <div className="container">
                        <div className="modal fade" id="myPopupAgreeDisagree" role="dialog" data-keyboard="false" data-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title text-center">Disclaimer</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            We are currently in the process .<br />
                                        </p>
                                    </div>
                                    <div className="modal-footer text-center">
                                        <input type="submit" name="btnAgree" value="I Agree" id="btnAgree" />
                                        <input type="submit" name="btnDisAgree" value="I Do Not Agree" id="btnDisAgree" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Request call  */}

                    {/* <!--Starts Request  call back section--> */}

                    <div id="divsales" className="request-callback">
                        <a data-target="#requestCallbackModal" data-toggle="modal" className="btn btn-primary btn-lg banner-btn request-call" href="javascript:void(0)" style={{fontFamily:'sans-serif'}}>
                        Enquire Now!</a>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="requestCallbackModal" tabindex="-1" role="dialog" aria-labelledby="requestCallbackModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header requestcallheade">
                                        <h5 className="modal-title" id="requestCallbackModalLabel" style={{color:'#fff'}}>	Enquire Now!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>

                                            <div className="form-group">
                                                <label style={{fontSize:'21px',fontFamily:'sans-serif', }}>Name</label>
                                                <input name="fname" type="text" id="fname" placeholder="Name" required className="form-control" onBlur="checkFloorFieldName_DB(this);" style={{fontFamily:'sans-serif'}} />
                                                <p id="errorFloor" style={{color:'red'}}></p>
                                            </div>

                                            <div className="form-group">
                                                <label style={{fontSize:'21px',fontFamily:'sans-serif', }}>Email</label>
                                                <input name="email" type="email" id="email" placeholder="Email"  required className="form-control" onBlur="checkFloorFieldEmail_DB(this);" 
                                                style={{fontFamily:'sans-serif'}} />
                                                <p id="error2Floor" style={{color:'red'}}></p>
                                            </div>

                                            <div className="form-group">
                                                <label style={{fontSize:'21px',fontFamily:'sans-serif', }}>Phone No.</label>
                                                <input name="phone" type="text" id="phone" placeholder="Phone"  required className="form-control" onBlur="checkFloorFieldPhone_DB(this);"
                                                style={{fontFamily:'sans-serif'}} />
                                                <p id="error1Floor" style={{color:'red'}}></p>
                                            </div>

                                            <div className="form-group">
                                                <input name="form_type" type="hidden" id="form_type" value="Brochure Enquiry" required className="form-control" onBlur="checkFloorFieldName_DB(this);" 
                                                style={{fontFamily:'sans-serif'}}  />
                                            </div>

                                            <input name="btnFloorDownloadBrochureHidden" type="hidden" id="btnFloorDownloadBrochureHidden" />

                                            <div className="form-group">
                                                <input type="submit" name="sub" value="Submit" onClick="return clientFunctionFloor_DB();" id="btnfloorsave" className="btn btn-default" />
                                            </div> 

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Ends Request call back section*/}

                    {/* <div id="css-only-modals">
                            <input id="modal1" class="css-only-modal-check" type="checkbox" checked/>
                            <div class="css-only-modal">
                                <label for="modal1" class="css-only-modal-close"><img src="https://img.icons8.com/ios-glyphs/48/c29653/cancel.png"></label>
                                <h2>Contact Form</h2>
                                <hr />
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body" style="text-align: justify;font-family: sans-serif;">
                                            <form action="php/process3.php" method="Post">
                                                <div class="form-group">
                                                    <label for="">Name</label>
                                                    <input name="name" type="text" id="name" placeholder="Name" class="form-control" required="" onblur="checkFloorReferFieldName(this);" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="">Email</label>
                                                    <input name="email" type="email" id="email" placeholder="Email" class="form-control" required="" onblur="checkFloorReferFieldEmail(this);" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="">Phone No.</label>
                                                    <input name="phone" type="text" id="phone" placeholder="Phone" title="Phone" required="" class="form-control" maxlength="12" 
                                                    onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"  />  
                                                </div>                       
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <input type="submit" name="sub2" value="Submit"  
                                                        id="" class="btn btn-default" style="background-color: #b9902b;color: #fff;"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <!--Starts Request  call back 2 section-->
                                
                         <!-- Request call --> */}

                        <input type="hidden" name="ImagesUrl" id="ImagesUrl" value=""/>

                        {/* <!-- Request call -->
                        <!-- top nav start --> */}

                        <div class="marlin-header">
                            {/* <!-- <div className="top-nav-bg bg-dark">
                                        <div className="container">
                                            <div className="top-nav">
                                                <nav className="navbar fa-pull-left">
                                                    <span className="navbar-brand call" style="padding-bottom: 0.3125rem;">
                                                        <a className="navbar-brand mobile-logotop" href="#" style="width: 31%;">
                                                            <div className="logo">
                                                                <img id="ImgProjectLogo" class="img-responsive" 
                                                                src="images/ssss.png" />
                                                            </div>
                                                        </a>
                                                    </span>
                                                </nav>
                                                <ul className="nav justify-content-end top-nav-right mr-auto">
                                                    <span className="navbar-brand call">
                                                        <a onclick="return gtag_report_conversion(tel:7672000666);" href="tel:7672000666"><span class="top-nav-icon">
                                                            <i className="fas fa-phone fa-rotate-90" aria-hidden="true"></i>+91 7672000666</span>
                                                            <div className="sell_do_virtual_numbers frontno" style="margin-bottom: 0"></div>
                                                        </a>
                                                    </span>
                                                </ul>
                                            </div>
                                        </div>
                                    <div className="clearfix"></div>
                                </div>
                            --> */}

                            <div className="merlin-navigation" style={{clear:'both'}}>
                                <nav className="navbar navbar-expand-lg navbar-light customnav-bar fixed-top" id="nav-top">
                                    <div className="container">
                                        <a className="navbar-brand mobile-logotop" href="#">
                                            <div className="logo" style={{width:'200px', height:'60px'}}>
                                                <img id="ImgProjectLogo" class="img-responsive" src="images/blogo.png" 
                                                style={{paddingTop:'10px'}}/>
                                            </div>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse nav-menu" id="navbarText">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#project">The Project <span style={{color:'#b9902b'}}>|</span><span class="sr-only">(current)</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#location">Location <span style={{color:'#b9902b'}}>|</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#Specifications">Specifications <span style={{color:'#b9902b'}}>|</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#Gallery">Gallery <span style={{color:'#b9902b'}}>|</span></a>
                                                </li>
                                                
                                                {/* <!--<li className="nav-item">
                                                    <a className="nav-link" href="#Highlights">Highlights <span style="color: #b9902b;">|</span></a>
                                                </li>--> */}

                                                <li className="nav-item">
                                                    <a class="nav-link" href="#about">About Us <span style={{color:'#b9902b'}}>|</span></a>
                                                </li>
                                            
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#Contacts">Reach Us <span style={{color:'#b9902b'}}>|</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <i className="fas fa-phone fa-rotate-90" aria-hidden="true" style={{marginTop:'12px', color:'#fff', marginLeft:'5px'}} ></i> 
                                                    <a className="nav-link" href="tel:9014260000" style={{marginTop:'-31px', backgroundColor:'#b9902b', width:'117px', color:'#fff', borderRadius:'25px'}}> 
                                                    &nbsp;&nbsp;&nbsp;  9014260000</a>
                                                </li>
                                                
                                                {/* <!--  <li className="nav-item">
                                                        <i className="fas fa-phone fa-rotate-90" aria-hidden="true"></i><a href="tel:9014260000"> 9014260000</a>
                                                    </li>--> */}

                                            </ul>
                                        </div>
                                    
                                    </div>
                                </nav>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        {/* <!-- Nav end--> */}


                        {/* <!--banner start--> */}
                        <div id="Home" className="banner">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div id="HomeBannerSlider" className="carousel-inner">
                                    <div className='carousel-item active'> 
                                        <img className='d-block w-100' src='images/new/BP.jpg' alt='slider Image' />
                                        {/* <!--<div class='content-detail' style="background: rgba(225,225,225,0.8)">
                                            <div class='container'>
                                            <h2 class='heading02'>BOUTIQUE OFFICE SPACES AT BUSINESS PARK <br/>NEW KALYANI NAGAR,PUNE</h2>
                                            <p>	Starting from 63LAKHS ALL INCLUSIVE* </p>
                                            </div>
                                            </div>--> */}
                                    </div>
                                
                                    {/* <!--<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/BP.jpg' alt='slider Image' />-->
                                            <!--</div>-->
                                            <!--<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/3.jpg' alt='slider Image' />-->
                                            <!--</div>-->
                                            <!--<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/4.jpg' alt='slider Image' /> -->
                                            <!--</div>-->
                                            <!--	<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/5.jpg' alt='slider Image' /> -->
                                            <!--</div>-->
                                            <!--	<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/6.jpg' alt='slider Image' /> -->
                                            <!--</div>-->
                                            <!--<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/new/7.jpg' alt='slider Image' /> -->
                                            <!--</div>-->
                                        <!--</div>-->
                                    
                                        <!--<div class='carousel-item'> 
                                            <img class='d-block w-100' src='images/s3.jpg' alt='slider Image' /> 
                                            
                                            <div class='content-detail' style="background: rgba(225,225,225,0.8)">
                                            <div class='container'>
                                            <h2 class='heading02'>BOUTIQUE OFFICE SPACES AT BUSINESS PARK <br/>NEW KALYANI NAGAR,PUNE</h2>
                                            <p>	Starting from 63LAKHS ALL INCLUSIVE* </p>
                                            </div>
                                            </div>
                                            
                                            </div>--> */}
                                            {/* <!--<div class='carousel-item'> -->
                                            <!--<img class='d-block w-100' src='images/s4.jpg' alt='slider Image' /> -->
                                            
                                            <!--<div class='content-detail' style="background: rgba(225,225,225,0.8)">
                                                <div class='container'>
                                                <h2 class='heading02'>BOUTIQUE OFFICE SPACES AT BUSINESS PARK <br/>NEW KALYANI NAGAR,PUNE</h2>
                                                <p>	Starting from 63LAKHS ALL INCLUSIVE* </p>
                                                </div>
                                                </div>--> */}
                                
                                             {/* <!--</div>--> */}
                                </div>
                                {/* <!--<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">-->
                                <!--    <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
                                <!--    <span class="sr-only">Previous</span>-->
                                <!--</a>--> */}
                                {/* <!--<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">-->
                                <!--    <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
                                <!--    <span class="sr-only">Next</span>-->
                                <!--</a>--> */}
                            </div>
                        </div>
                        {/* <!--banner end--> */}

                        {/* <!-- project overview start -->
                        <!--<div style="background-color: black; padding-bottom: 30px; padding-top: 40px;">-->
                            
                        <!--    <div class="new offset-2" style=" font-family: sans-serif;">-->
                                
                        <!--        <p class="new2" style="color:#af9f68 !important; font-size: 30px;">BOOK A SPLENDID OFFICE ONLINE WITHOUT EVEN STEPPING OUT!</p></br>-->
                        <!--        <p class="new3" style="color:#ffffff !important; font-size: 16px;">3 Simple Steps to Own A Trendy Office in an Upmarket locality</p>-->
                        <!--        <div class="new1" style="margin-left:36px; font-family: sans-serif;"></br>-->
                        <!--        <p style="color:#ffffff !important; font-size: 16px;">1.&nbsp;Contact us to Select your Unit</p>-->
                        <!--        <p style="color:#ffffff !important; font-size: 16px;">2.&nbsp;Book your Unit by Paying Just Rs. 50,000</p>-->
                        <!--        <p style="color:#ffffff !important; font-size: 16px;">3.&nbsp;Get Rs. 50,000* Cashback on Agreement</p>-->
                        <!--       </div></br>-->
                        <!--        <p class="new4" style="color:#ffffff !important; font-size: 15px;">100% refund if you choose to withdraw within 30 days.</p>-->
                        <!--        <p class="new5" style="color:#ffffff !important; font-size: 15px;">*Exclusive Lockdown Offer valid for limited period.</p>-->
                            
                        <!--    </div>-->
                            
                        <!--</div>--> */}

                        <div className="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="./images/3.png"/>
                                </div>
                                <div class="col-md-6 new12">
                                    <img src="./images/4.png"/>
                                </div>
                            </div> 
                        </div>

                        <div id="project" style={{backgroundImage:'url(images/obg.jpg)'}}>
                            <div class="container">
                                <div class="overview-heading text-center"><br/>
                                    <h1 style={{color:'#fff', fontFamily:'sans-serif',fontSize:'30px'}}><br/> <br/><br/>
                                        PLAN YOUR BUSINESS STRATEGY AT <br/>	
                                        BRAMHACORP BUSINESS PARK
                                    </h1><br/><br/>
                                    <p style={{color:'#fff', fontFamily:'sans-serif'}}>
                                        Bramhacorp Business Park presents perfect boutique office spaces ideal for all the aspiring business tycoons to kick<br/>
                                        start their million dollar ideas that will change the world forever. Our commercial spaces is built for entrepreneurs and <br/>
                                        professionals and more importantly profitable.
                                    </p><br/>
                                    <p >Boutique Office Spaces Starting from Rs. 74 Lakh (All Incl.)</p>
                                    <br/><br/>
                                    <h2 style={{color:'#fff', fontFamily:'sans-serif',fontSize:'30px'}}>HIGHLIGHTS	 </h2>
                                </div>
                                

                                <div className="banner-down-section" style={{marginTop:'-2px'}}>
                                    <div className="bd-example">
                                        <div className="card-group">
                                            <div className="card project-overview text-center" style={{backgroundColor:'transparent',marginBottom:'-43px'}} >
                                                <div className="card-body" style={{borderRight:'2px solid #fff'}}>                                   
                                                    <p style={{color:'#fff', fontFamily:'sans-serif',fontSize:'13px'}} ><span>Grand Double Height</span></p>
                                                    <p style={{color:'#fff', fontFamily:'sans-serif',fontSize:'16px'}}>ENTRANCE LOBBY</p>
                                                </div>
                                            </div>
                                            <div className="card text-center project-overview" style={{backgroundColor:'transparent',marginBottom:'-43px'}}>
                                                <div className="card-body" style={{borderRight:'2px solid #fff'}}>                                   
                                                    <p >
                                                        <span id="lblProperty1" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'16px'}} >PRIVATE BALCONY</span></p>
                                                    <p style={{color:'#fff',fontSize:'11px',fontFamily:'sans-serif',fontSize:'13px'}} >For Individual Office Spaces</p>
                                                </div>
                                            </div>
                                            <div className="card text-center project-overview" style={{backgroundColor:'transparent',marginBottom:'-43px'}}>
                                                <div className="card-body" style={{borderRight:'2px solid #fff'}}>                                   
                                                    <p>
                                                        <span id="lblProperty1" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'13px'}} >High Speed</span></p>
                                                    <p className="card-title text-uppercase" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'16px'}} >ELEVATORS </p>
                                                </div>
                                            </div>
                                            <div className="card text-center project-overview" style={{backgroundColor:'transparent',marginBottom:'-43px'}}>
                                                <div className="card-body" style={{borderRight:'2px solid #fff'}}>                                   
                                                    <p>
                                                        <span id="lblProperty1" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'16px'}} >LIFT LOBBY</span></p>
                                                    <p style={{color:'#fff', fontFamily:'sans-serif',fontSize:'13px'}} >On each floor </p>
                                                </div>
                                            </div>
                                            <div className="card text-center project-overview" style={{backgroundColor:'transparent',marginBottom:'-43px'}}>
                                                <div className="card-body" style={{borderRight:'2px solid #fff'}}>                                   
                                                        <p className="">
                                                            <span id="lblProperty1" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'13px'}} >Rooms for  </span></p>
                                                        <p className="card-title text-uppercase" style={{color:'#fff', fontFamily:'sans-serif',fontSize:'16px'}} >MEETING & CONFERENCE </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                </div>
            </>
        )
    }
}

export default BusinessParkPune;