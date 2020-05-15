// import React from 'react';
// import Layout from '../components/layout';
// import Footer from '../components/footer';
// import SEO from "../components/seo";
// import { Link, graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
// import Div100vh from 'react-div-100vh/lib/Div100vh';


// function Partners(props){
//   const [swiper, updateSwiper] = React.useState(null);
//     const goNext = () => {
//       if (swiper !== null) {
//         swiper.slideNext();
//       }
//     };
//     const goPrev = () => {
//       if (swiper !== null) {
//         swiper.slidePrev();
//       }
//     };
//     const params = {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   }

//     const parnersData = props.data.prismicPartners.data;
//     return(
//       <Layout location="/" noHeader="true"  pathname={props.location.pathname}>
//         <SEO title={parnersData.title.text}/>
//         <Div100vh className="home-galler" style={{ height: 'calc(100rvh - 60px)'}}>
//           <div className="bramha-swiper">
//             <Swiper getSwiper={updateSwiper} {...params}>
//               <div>Slide #1</div>
//               <div>Slide #2</div>
//               <div>Slide #3</div>
//               <div>Slide #4</div>
//               <div>Slide #5</div>
//               <div>Slide #6</div>
//               <div>Slide #7</div>
//               <div>Slide #8</div>
//               <div>Slide #9</div>
//               <div>Slide #10</div>
//             </Swiper>
//           </div>
//           <div className="tabs">
//             <button onClick={goPrev}>Prev</button>
//             <button onClick={goNext}>Next</button>
//           </div>
//           </Div100vh>
//       </Layout>
//     )
// }
// export default Partners;

// export const partnersPage = graphql` {
//   prismicPartners {
//     data {
//       title {
//         text
//       }
//       banner {
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 1150) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// }`

import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Partners extends React.Component {
  render(){
    const parnersData = this.props.data.prismicPartners.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={parnersData.title.text}/>
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{parnersData.title.text} </h1>
            <div className="row ">
              <div className="col-lg-6">
              <p>
              BramhaCorp is one of today's leading business groups headquartered 
              in Pune. Our businesses encompass real estate development, 
              hospitality, retail and leisure. The vision and dynamism of
              the founders has seen the group making remarkable strides. </p>

              <p>
              Our achievements over the last 35 years are landmarks that have
              set precedents. In 1998, we were the first to bring the premium
              hospitality brand - Le Meridien, now Sheraton Grand to Pune. 
              The Residency Club was the first lifestyle leisure club that 
              set up. In 2003, we launched the first hi-tech 'SunCity',
              a residential gated community that became benchmark thereafter.
              </p>

              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={parnersData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
        <Footer/>
      </Layout>
    )
  } 
}
export default Partners;

export const partnersPage = graphql` {
  prismicPartners {
    data {
      title {
        text
      }
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`