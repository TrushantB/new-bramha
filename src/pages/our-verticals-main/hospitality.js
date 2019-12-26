import React from 'react'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import hospitability from '../../styles/images/hospitability.jpg'
import hospitability1 from '../../styles/images/hospitability1.jpg';
import hospitability2 from '../../styles/images/hospitability2.jpg';

class Hospitality extends React.Component {
  render(){
    return(
      <Layout>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">Hospitality Projects</h2> 
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph"> 
                <p >
                    With its vision to enhance the lifestyle standard, BramhaCorp entered into the hospitality industry in the year 1995. The first hospitality venture – ‘Le Meridian’, was launched in the Andheri suburb of Mumbai. Ever since, it has been successfully catering to a wide clientele.
                </p>
                <p>
                    To further expand its footprint, BramhaCorp has now introduced the brand Novotel in Ahmedabad, Gujarat, a contemporary-styled hotel, equipped with 184 rooms and also launched Hotel Hyatt Place in Goa in December, 2015.
                </p>
              </div>  
            </div>
          </div>
          </section>
          <section className="hospitality-projects">
            <div className="residences">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 p-0 pl-sm-3 pr-sm-3">
                    <div className="residences-card position-relative">
                      <div className="residences-img ">
                        <img src={hospitability} alt="" width="100%"/>
                      </div>
                      <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                        <div className="rectangle-title">
                          <h4 className="text-uppercase m-0 inner-section-title">Le Meredian</h4>
                        </div>
                        <div className="apartment-size d-flex justify-content-between align-items-center">
                          <span className="text-uppercase">3 & 3.5 bhk</span>
                          <a href="#">
                              <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                        <div className="project-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>New Kalyani Nagar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-0 pl-sm-3 pr-sm-3">
                      <div className="residences-card position-relative">
                      <div className="residences-img ">
                        <img src={hospitability1} alt="" width="100%"/>
                      </div>
                      <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                        <div className="rectangle-title">
                          <h4 className="text-uppercase m-0 inner-section-title">Sheraton-Grand</h4>
                        </div>
                        <div className="apartment-size d-flex justify-content-between align-items-center">
                          <span className="text-uppercase">3 & 3.5 bhk</span>
                          <a href="#">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                        <div className="project-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>New Kalyani Nagar</span>
                        </div>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 p-0 pl-sm-3 pr-sm-3">
                    <div className="residences-card position-relative">
                      <div className="residences-img ">
                        <img src={hospitability2} alt="" width="100%"/>
                      </div>
                      <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                        <div className="rectangle-title">
                          <h4 className="text-uppercase m-0 inner-section-title">Residency Lake Resort</h4>
                        </div>
                        <div className="apartment-size d-flex justify-content-between align-items-center">
                          <span className="text-uppercase">3 & 3.5 bhk</span>
                          <a href="#">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                        <div className="project-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>New Kalyani Nagar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </Layout>
    )
  }
}


export default Hospitality;