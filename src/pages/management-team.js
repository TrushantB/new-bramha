import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';

class ManagementTeam extends React.Component {
  render(){
    const mgntData = this.props.data.prismicManagementTeam.data;
    return(
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title={mgntData.sub_title.text}/>
          <section className="award-wrapper">
            <section className="page-heading-section container container-sm-fluid bg-color">
              <div className="padding-block-60">
                <h2 className="page-heading">{mgntData.sub_title.text}</h2>
              </div>
              <div className="row mr-0">
                <div className="col-12">
                <div className="main-paragraph mb-0" dangerouslySetInnerHTML={{__html:mgntData.description.html }}/>
                </div>
              </div>
            </section>
          <section className="container">
            <div className="col-12">
              <div className="gray-background d-flex align-items-center">
                <div className="line"></div>
                <h3 className="foundertitle">{mgntData.founder_title.text}</h3>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row no-gutters justify-content-end set-position">
                {
                  mgntData.founder.map((item, index) => {
                    return(
                      <div key={index} className="col-md-4 col-lg-3 col-sm-6">
                        <div className="member">
                          <div className="founder-image">
                            {/* <img src={item.image.url} alt="" title="Founder" width="100%"/> */}
                          </div>
                          <div className="info-content">
                            <h4 className="heading">{item.name.text}</h4>
                            <span className="subheading">{item.designation.text}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        {/* <!-- Director Start --> */}
          <section className="director">
            <div className="container">
              <div className="title-heading text-center mb-60">
                <h3 className="text-center section-title text-uppercase">{mgntData.director_title.text}</h3>
              </div>
              <div className="row">
                {
                  mgntData.directors.map((item, index) => {
                    return(
                      <div key={index} className="col-md-4 col-lg-3 col-sm-6">
                        <div className="member">
                          <div className="founder-image">
                            {/* <img src={item.image.url} alt="" title="Founder" width="100%"/> */}
                          </div>
                          <div className="info-content">
                            <h4 className="heading">{item.name.text}</h4>
                            <span className="subheading">{item.designation.text}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div> 
          </section>
        {/* <!-- Director end--> */}
        {/* <!-- Stategy Start --> */}
          <section className="stategy-team mt-140">
            <div className="container">
              <div className="title-heading text-center mb-60">
                <h3 className="text-center section-title text-uppercase">{mgntData.strategy_team_title.text}</h3>
              </div>
              <div className="row">
                {
                  mgntData.strategy_team.map((item, index) => {
                    return(
                      <div key={index} className="col-md-4 col-lg-3 col-sm-6">
                        <div className="member">
                          <div className="founder-image">
                            {/* <img src={item.image.url} alt="" title="Founder" width="100%"/> */}
                          </div>
                          <div className="info-content">
                            <h4 className="heading">{item.name.text}</h4>
                            <span className="subheading">{item.designation1.text}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div> 
          </section>
        {/* <!-- Stategy end--> */}
        {/* <!-- Head of department Start --> */}
          <section className="department mt-140">
            <div className="container">
              <div className="title-heading text-center mb-60">
                <h3 className="text-center section-title text-uppercase">{mgntData.head_of_department_title.text}</h3>
              </div>
              <div className="row">
                {
                  mgntData.head_of_department.map((item, index) => {
                    return(
                      <div key={index} className="col-md-4 col-lg-3 col-sm-6">
                        <div className="member ">
                          <div className="founder-image">
                            {/* <img src={item.image.url} alt="" title="Founder" width="100%"/> */}
                          </div>
                          <div className="info-content">
                            <h4 className="heading">{item.name.text}</h4>
                            <span className="subheading">{item.designation1.text}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div> 
          </section>
        </section>
      </Layout>
    )
  } 
}
export default ManagementTeam;

export const managementPage = graphql`{
  prismicManagementTeam{
    data{
      sub_title{
        text
      }
      description{
        html
      }
      founder_title{
        text
      }
      founder{
        name{
          text
        }
        designation{
          text
        }
      }
      director_title{
        text
      }
      directors{
        name{
          text
        }
        designation{
          text
        }
      }
      strategy_team_title{
        text
      }
      strategy_team{
        name{
          text
        }
        designation1{
          text
        }
      }
      head_of_department_title{
        text
      }
      head_of_department{
        name{
          text
        }
        designation1{
          text
        }
      }
    }
  }
}`