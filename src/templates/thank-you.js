import React from "react"
import img1 from '../images/logo.png';
import { Link } from "gatsby";
const ThankYou = (props) =>  {
  
  const thankYouData = props.data.allPrismicThankYou.edges[0].node.data;
  let thankMessage=thankYouData.group.filter(item => item.slug==props.pageContext.slug)
  
  return (
    
    <div className="thank-you-page-wrapper py-5 px-4">
      <div className="d-flex align-items-center justify-content-center py-5 flex-column">
          <div className="logo">
            <img src={img1} alt="BramhaCorp Logo" className="logo-img"/>
          </div>
          <div className="headings">
            <h1 className="title mt-5 mb-3">{thankMessage[0].title1}</h1>
            <h2 className="sub-title mb-0 mb-sm-2" dangerouslySetInnerHTML={{__html:thankMessage[0].description1.html }}></h2>
          </div>
          <div className="visit-website-button mt-5">
              <Link to={thankMessage[0].button_value} className="btn-secondary">
                {thankMessage[0].button_name}
              </Link>
          </div>
      </div>
    </div>
  )
  
}

export default ThankYou;

export const thankYouData = graphql`
query thankYouData($slug: String!) {
  allPrismicThankYou(filter: {data: {group: {elemMatch: {slug: {eq: $slug}}}}}) {
    edges {
      node {
        data {
          seo_description
          seo_title
          title {
            text
          }
          group {
            button_name
            button_value
            title1
            slug
            description1 {
              html
            }
          }
        }
      }
    }
  }
}
`
