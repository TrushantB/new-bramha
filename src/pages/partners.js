import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Div100vh from 'react-div-100vh/lib/Div100vh';


function Partners(props){
  const [swiper, updateSwiper] = React.useState(null);
    const goNext = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };
    const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

    const parnersData = props.data.prismicPartners.data;
    return(
      <Layout location="/" noHeader="true"  pathname={props.location.pathname}>
        <SEO title={parnersData.title.text}/>
        <Div100vh className="home-galler" style={{ height: 'calc(100rvh - 60px)'}}>
          <div className="bramha-swiper">
            <Swiper getSwiper={updateSwiper} {...params}>
              <div>Slide #1</div>
              <div>Slide #2</div>
              <div>Slide #3</div>
              <div>Slide #4</div>
              <div>Slide #5</div>
              <div>Slide #6</div>
              <div>Slide #7</div>
              <div>Slide #8</div>
              <div>Slide #9</div>
              <div>Slide #10</div>
            </Swiper>
          </div>
          <div className="tabs">
            <button onClick={goPrev}>Prev</button>
            <button onClick={goNext}>Next</button>
          </div>
          </Div100vh>
      </Layout>
    )
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
