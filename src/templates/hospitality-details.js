import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'

class HospitalityDetails extends React.Component {
    render(){
        return(
            <Layout>
                <h3>This is Hospitality Details page </h3>

            <Footer />
            </Layout>
        )
    }
}
export default HospitalityDetails;

export const hospitalityPage = graphql` 
    query hospitalityData($uid: String!) {
    prismicOurVerticalsArticle(uid: { eq: $uid }) {
    data{
        title{
          text
        }
        banner{
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        logo{
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
        maharera{
         url
        }
        heading{
          text
        }
        description{
          text
        }
        phase{
            title1{
              text
            }
            description1{
              text
            }
          }
        short_description{
          text
        }
        flat_bhk{
          text
        }
        flat_address{
          text
        }
        tag_line{
          text
        }
        unique_features{
           text
        }
        thumbnail{
          url
        }
        certificate{
          title1{
            text
          }
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        photo_gallery{
          text
        }
        showcase{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                  }
                }
            }
          }
        }
        floor_plans1{
          text
        }
        floor_plans{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        amenities1{
          text
        }
        amenities_banner{
          url
        }
        amenities{
          title1{
              text
          }
          description1{
            text
          }
        }
        fact_file_heading{
           text
        }
        fact_file{
           title1{
            text
          }
          description1{
            text
          }
        }
        site_progress_heading{
            text
        }
        site_progress{
          images{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        locate_us{
          title1{
            text
          }
        }
      }
    }
}`