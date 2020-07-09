import React from "react"

import Logo from '../images/boulevard-towers/logo.png'
import BigLogo from '../images/boulevard-towers/logo1.png'
import KeyProject1 from '../images/boulevard-towers/icon1.png'
import KeyProject2 from '../images/boulevard-towers/icon2.png'
import KeyProject3 from '../images/boulevard-towers/icon3.png'
import KeyProject4 from '../images/boulevard-towers/icon4.png'
import KeyProject5 from '../images/boulevard-towers/icon5.png'
import three from '../images/boulevard-towers/3.png'
import four from '../images/boulevard-towers/4.png'
import pune from '../images/boulevard-towers/pune.png'
import back from '../images/boulevard-towers/back.png'
import promoters1 from '../images/boulevard-towers/11.png'
import promoters2 from '../images/boulevard-towers/12.png'
import promoters3 from '../images/boulevard-towers/13.png'
import promoters4 from '../images/boulevard-towers/14.png'
import promoters5 from '../images/boulevard-towers/15.png'
import whatsapp from '../images/boulevard-towers/whatsapp.png'
import rera1 from '../images/boulevard-towers/rera1.png'
import Bgimage from '../images/boulevard-towers/abbg.jpg'


class BoulevardTowers extends React.Component{
    render(){
        return(
            <>
                {/* Header start here */}
            <div className="boulevard-towers">    
                <div className="top animated slideInDown top-menu-style" >
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-header" style={{paddingLeft:'8%'}} >
                            <div className="navbar-left" style={{fontFamily:'Proxima Nova', fontSize:'1.715rem'}}>
                                <a href="" className="main-logo">
                                    <img src={Logo} alt="BramhaCorp Boulevard Towers Logo"/>
                                 </a>
                                 <a href="" className="hide-logo">
                                    <img src={Logo} alt="BramhaCorp Boulevard Towers Logo"/>
                                </a>
                            </div>
                            <div className="hamburger navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarText" role="navigation" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="hamburger__line"></span>
                                <span className="hamburger__line"></span>
                                <span className="hamburger__line"></span>
                                <span className="hamburger__text">Menu</span>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse ml-auto" style={{paddingRight:'8%'}} id="navbarText">
                            <ul className="navbar-nav" style={{fontFamily:'Proxima Nova', fontSize:'16px'}}>
                                <li className="nav-item next animated slideInUp"><a href="#home">Home</a></li>
                                <li className="nav-item next animated slideInUp"><a href="#about-us">About</a></li>
                                <li className="nav-item next animated slideInUp"><a href="#location">Location</a></li>
                                <li className="nav-item next animated slideInUp"><a href="#contact-us">Contact</a></li>
                            </ul>
                            <a href="tel:+919014260000" target="_blank"><button className="header-no">+ 91 9014260000</button></a>
                        </div>
                    </nav>
                </div>
                <header className="hero cust-hero">
                    <div className="container">
                        <div className="hero__caption">
                            <div className="hero__row">
                            </div>
                        </div>
                    </div>
                </header>   

                {/* Header end here  */}

                <section className="hero-img-style" id="about-us" style={{backgroundColor:'#fff', backgroundImage:`url(${back})`,height:'auto' }}>
                    <div className="container" style={{paddingTop:'4%'}}>
                        <div className="row text-center">
                            <div className="col-sm-12 text-center project-details">
                                <h2 className="pb15">Now Launching </h2>
                                <img src={BigLogo} alt="BramhaCorp Boulevard Towers Logo" id="Logo"/>
                                <h5 className="pt25" style={{color:'#a12a2c'}}>PRIME COMMERCIAL SPACES | INR 94 Lakh ONWARDS (All Inclusive)</h5>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <p>
                                    Opulence and convenience blend beautifully to give shape to Boulevard Towers. The bespoke
                                    design, stellar workmanship and top-line amenities make Boulevard Towers truly a proud address.
                                    It’s a masterpiece crafted to propel your business into the future.
                                </p>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>

                        {/* <div className="new text-center" style={{paddingTop:'35px',}}>
                            <p style="color:#a12a2c; font-size:17.5px; font-family: century gothic ! important;">BOOK YOUR NEW HIGH-RISE OFFICE ONLINE FROM HOME!</p>
                            <p style="color:#909090; font-size:14px; font-family: century gothic ! important;">The Best Part is, earn an Assured Monthly Rental!</p>
                            <p style="color:#909090; font-size:14px; font-family: century gothic ! important;">Earn Assured Rental* of Rs. 50/- Per Sq.ft. Per Month for 3 Years from the Agreement Date.</p>
                            <p style="color:#909090; font-size:12px; font-family: century gothic ! important;">*Exclusive Lockdown Offer valid for limited period.</p>
                            </br>
                        </div> */}
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={three}/>
                                </div>
                                <div className="col-md-6 new">
                                    <img src={four}/>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center pt60 pb60 key-project">
                            <div className="col-sm-12">
                                <h2 className="pb15">Key Project Features </h2>
                            </div>
                            <div className=" col-sm-12 pt30"></div>
                            <div className="col-sm-1"></div>
                                <div className="col-sm-2 key-style">
                                    <img src={KeyProject1} alt="Elegant Entrance Lobby"/>
                                    <h5 className="pt20">Elegant Entrance Lobby </h5>
                                </div>
                                <div className="col-sm-2 key-style">
                                    <img src={KeyProject2} alt="Podium With Food Court"/>
                                    <h5 className="pt20">Podium with Food Court</h5>
                                </div>
                                <div className="col-sm-2 key-style">
                                    <img src={KeyProject3} alt="De-Stress Zone"/>
                                    <h5 className="pt20">De-stress Zone</h5>
                                </div>
                                <div className="col-sm-2 key-style">
                                    <img src={KeyProject4} alt="High Speed Elevators"/>
                                    <h5 className="pt20">High Speed Elevators</h5>
                                </div>
                                <div className="col-sm-2 key-style">
                                    <img src={KeyProject5} alt="Common Area With Generator Backup"/>
                                    <h5 className="pt20">Common Area with Generator Backup</h5>
                                </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>                    
                </section>

                <section className="section section_no-space-bottom hay-div-style" id="location"  style={{backgroundImage:`url(${Bgimage})`, margin:'0px 0 0 0px', height:'auto', paddingTop:'25px'}}>
                    <div className="container">
                        <br/>
                        <div className="row justify-content-center">
                            <div className="col col-md-12 col-lg-10 col__quote text-center">
                                <h3 className="title__section title__h3 text-center" >- Boulevard Towers -</h3>
                                <p className="title__section title__h4" style={{marginTop:'8px',fontFamily:'normal',fontFamily:'Proxima Nova',fontSize:'21px'}}>~ TO INSPIRE & IMPRESS ~ </p>
                                <blockquote className="block-quote block-quote__about">
                                    <p className="fontsame" style={{paddingTop:'20px',fontWeight:'400', color:'#909090',lineHeight:'26px', letterSpacing:'0.1rem'}}>
                                        Boulevard Towers is planned with attention to detail, bearing BramhaCorp’s legendary mark of
                                        quality and workmanship. The design innovation achieves a superb fusion and form and function,
                                        creating an ambiance that improves the ease of doing business.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                 </section>

                <section className="section section_no-space-bottom sscd-timeline js-cd-timeline pb60" id="our-work" style={{paddingTop:'20px,', backgroundImage:`url(${Bgimage})`}}>
                    <div className="row">
                        <div className="col-md-5"></div>
                    </div>
                    <div className="cd-timeline__container">
                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img cd-timeline__img--picture js-cd-img" style={{top:'95%'}}>
                            </div> 
                            <div style={{float:'right'}}>
                                <img src={pune}  alt="Office Spaces Pune" className="mmb30"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content mmb60">
                                <div style={{width:'90%'}} className="mmauto">
                                    <p className="title__section title__h4 fontsame" style={{marginTop:'5px',color:'#909090', fontWeight:'600'}} >
                                        <b> Pune – A Metropolis in the Making </b>
                                    </p>
                                    <p className="fontsame" style={{color:'#909090',fontSize:'14px !important',}}>
                                        Pune has witnessed accelerated growth in recent years. It is home to over 350 innovation centers,
                                        global technology companies and off-shore divisions of international banks. Pune has emerged as
                                        the 7 th largest industrial hub in India; it is a preferred place for foreign direct investment and mega
                                        projects. The city’s vibrant and dynamic culture, renowned academic institutions and growing job
                                        market attract people in increasing numbers. This exponential growth has turned Pune into a
                                        flourishing commercial destination, creating opportunities for businesses of all types and sizes.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img cd-timeline__img--movie js-cd-img" style={{top:'95%'}}>
                            </div> 
                            <div style={{float:'left'}} >
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.047646887869!2d73.87408011420423!3d18.526748873822267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16af7d213a5%3A0x1e86138c420cc217!2sBoulevard%20by%20BramhaCorp%20at%20Sadhu%20Vaswani%20Chowk%20Camp!5e0!3m2!1sen!2sin!4v1575627293578!5m2!1sen!2sin" width="450" height="265" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                            </div>
                            <div className="cd-timeline__content js-cd-content pb60">
                                <div style={{width:'100%'}} className="mmauto">
                                    <p className="title__section title__h4 fontsame ml13 mml15" style={{marginTop:'5px',color:'#909090',fontWeight:'600'}}>
                                        <b> Prime Location </b>
                                    </p>
                                    <p className="fontsame pl68 mpl68" style={{color:'#909090', marginTop:'0', marginRight:'5px',fontSize:'14px !important'}}>
                                        Rising over the upmarket locality of Pune Camp, Boulevard Towers is indeed a well-connected
                                        andmark. Pune Railway Station is just round the corner, whereas luxury hotels, renowned hospitals
                                        and swanky malls are easily accessible. You&#39;re at a vantage point in Boulevard Towers where
                                        everything you need is within easy reach!
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section> 

                <section className="section section_no-space-bottom sscd-timeline js-cd-timeline pt60 pb60" id="contact-us" style={{backgroundImage:'url(img/back.png)'}}>
                    <div className="container">                        
                        <h3 className="title__h5 hero__title text-center pb30" style={{fontSize:'30px', letterSpacing:'0.7px',fontWeight:'100'}}>
                            - Contact Us -
                        </h3>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-3 mmb30">
                                <div className="pr20">
                                    <div>
                                        <p style={{fontSize:'18px'}}>Prime Commercial Spaces</p>
                                            <p>
                                                Boulevard Towers, <br/>
                                                Near Sadhu Vaswani Chowk, Camp, <br/> 
                                                Pune-411001
                                            </p>
                                    </div>
                                    <div className="pt20">
                                        <a   href="https://www.google.com/url?q=http://maharera.mahaonline.gov.in&sa=D&source=hangouts&ust= P52100024126&usg=AFQjCNFFrZo-ITv2LqLTUk9lx7H7kQ8BCA"> 
                                            <img src={rera1} alt="MahaRera Registration Logo"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control myform2" name="name" required id="name" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
                                    </div>

                                    <div className="form-group">
                                        <input id="email" type="email" name="email" required className="form-control myform2" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                                    </div>

                                    <div className="form-group">
                                        <input data-validation="number" id="phone" type="tel" min="10" name="contact" required className="form-control footer-phone myform2" aria-describedby="phoneHelp" placeholder="Enter Your Phone Number"/>
                                    </div>

                                    <div className="form-group">
                                        <textarea id="message" name="message" rows="3" maxLength="6000" className="form-control" style={{backgroundColor:'#ccc',padding:'10px 0'}} placeholder="Enter Your Message"></textarea>
                                    </div>

                                    <input name="form_type" type="hidden" id="form_type" value="Enquiry Form" required="" className="form-control"  
                                        style={{fontFamily:'sans-serif'}} />

                                    <div className="source">
                                        <input type="hidden" name="utm_source" value=""/>
                                    </div>

                                    <div className="utm_medium">
                                        <input type="hidden" name="utm_medium" value=""/>
                                    </div>

                                    <div className="utm_campaign">
                                        <input type="hidden" name="utm_campaign" value=""/>
                                    </div>

                                    <input className="btn btn-default toggle-disabled" type="submit" name="sub" value="Submit"  style={{color:'#fff', backgroundColor:'#b93a3e ! important'}} disabled />
                                            
                                </form>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </section>

                <section className="section brain brains-css-style pb60 mpb0" style={{height:'auto', backgroundColor:'#fff'}}>
                    <div className="container">
                        <div className="row text-center  pt60">
                            <div className="col-md-12 showcase__text">
                                <div className="showcase__title">
                                    <h3 className="title__section title__h3 text-center pb15" >
                                        - About BramhaCorp -
                                    </h3>
                                    <p className="collection__description pt-2 text-uppercase" style={{fontSize:'16px'}}>
                                        pioneering the pune real estate market since 1982 <br /> 
                                        from the promoter of
                                    </p>

                                    <div className="promoters">
                                        <div className="l1">
                                            <img className="img-fluid" alt="Sheratan Grand – Pune Bund Garden Road Hotel" src={promoters1}/>
                                        </div>
                                        <div className="l2">
                                            <img className="img-fluid" alt="Le Meridien – Mahabaleshwar Resort & Spa" src={promoters2}/>
                                        </div>
                                        <div className="l3">
                                            <img className="img-fluid" alt="Residency Lake Resort & Spa - Mulshi" src={promoters3}/>
                                        </div>
                                        <div className="l4">
                                            <img className="img-fluid" alt="Residency Club – Bund Garden Road, Pune" src={promoters4}/>
                                        </div>
                                        <div className="l5">
                                            <img className="img-fluid" alt="F-Residences – New Kalyani Nagar, Pune" src={promoters5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="cd-timeline__container">
                            <div className="cd-timeline__block js-cd-block">
                                <h3 className="title__h5 hero__title text-center mb30" style={{fontSize:"18px", letterSpacing:'0.7px',fontWeight:'100', marginTop:'0px'}}>
                                    - IMPORTANT NOTE -
                                </h3>
                                <div>
                                    <div style={{float:'right',paddingLeft:'10px'}} >
                                        <p className="work-description fontsame" style={{color:'#525252',marginRight:'5px',fontSize:'14px !important',textAlign:'center',}}>
                                            The subject project identified as ‘BOULEVARD Towers’ has been registered via MahaRERA Registration No.
                                            P52100024126. The subject project is registered for identified and defined part portion of larger
                                            project having multiple buildings as shown in the entire display of larger project. The entire larger 
                                            multiple buildings shown are not part of the subject registered project. The subject project under this 
                                            correspondence includes “Wing A of Phase 1, having 13 Shops on Upper ground Floor / Ground Floor, 
                                            14 shops on 01st Floor, 14 Offices on 02nd Floor, 44 Offices on 03rd Floor, 44 Offices on 04th Floor 
                                            and 43 offices on 05thFloor.” These units from sanctioned projects are only offered for advertisement and 
                                            sale under this correspondence and no other part/s from larger project buildings are offered for advertisement 
                                            and sale. The other attached and continuous part of larger project building/s will be registered as separate projects 
                                            and those vertical and horizontal sections of building/s are not part and parcel of subject project for which this 
                                            advertisement and correspondence is issued. This clarification is issued as per provisions mentioned in Real Estate 
                                            (Regulation and Development) Act, 2016, to avoid any kind of loss or damage to any person and to disclose true and correct 
                                            information about registered project. The registered project shall be developed and completed in accordance with the sanctioned plans, 
                                            layout plan and specifications approved by the Competent Authorities. For any queries of difficulties or for better understanding 
                                            you are requested to contact the Promoter’s address with prior appointment and intimation. *Terms & Conditions Apply
                                        </p>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>  
                </section>

                <section className="section section_no-space-bottom sscd-timeline js-cd-timeline pt30 pb30" id="contact-us" style={{backgroundImage:`url(${Bgimage})`}}>
                    <div className="container">
                        <div className="row text-center" style={{display:'block'}}>
                            <p className="text-center">
                                Copyright @ 2019 BramhaCorp Ltd |  
                                <a href=" https://www.bramhacorp.in/privacy-policy/" target="_blank" style={{textDecoration:'none', color:'#909090'}}>
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                        <div className="whatsapp-icon">
                            <a href="http://wa.me/917030500002?text=Hello,%20I%20am%20interested%20in%20Boulevard%20Towers" target="_blank">
                                <img src={whatsapp} alt="Whatsapp Icon" style={{height:'50px'}}/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>    
        </>
        )
    }
}

export default BoulevardTowers;

