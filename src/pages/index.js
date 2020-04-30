import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import Div100vh from 'react-div-100vh';
import HomeGallery from "./HomeGallery";


function IndexPage(props) {

  const [currentSlideKey, setSlideKey] = React.useState();
  const [activeSlideIndex, setActiveSlideIndex] = React.useState();
  const [activeTab, setActiveTab] = React.useState('residential');

  const [swiper, setSwiper] = React.useState();


  const updateSlideKey = (key, type) => {
    setSlideKey(key);
    setActiveTab(type);
  }
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    updateOnWindowResize: true
  }

  const residential = props.data.prismicResidential.data.gallery.map((item, index) => ({...item, type:'residential', itemIndex:`residential-${index}`}));
  const commercial = props.data.prismicCommercial.data.gallery.map((item, index) => ({...item, type:'commercial', itemIndex:`commercial-${index}`}));;
  const hospitality = props.data.prismicHospitality.data.gallery.map((item, index) => ({...item, type:'hospitality', itemIndex:`hospitality-${index}`}));;
  const leisure = props.data.prismicLeisureClub.data.gallery.map((item, index) => ({...item, type:'leisure-club', itemIndex:`leisure-club-${index}`}));;
  const verticals = [residential, commercial, hospitality, leisure];
  const reducedVerticals = verticals.reduce((a, b) => [...a, ...b], []);


  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
    const currentActiveSlide = reducedVerticals.find((item, index) => swiper.realIndex == index );
    updateSlideKey(currentActiveSlide.itemIndex, currentActiveSlide.type)
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      const currentActiveSlide = reducedVerticals.find((item, index) => swiper.realIndex == index );
      updateSlideKey(currentActiveSlide.itemIndex, currentActiveSlide.type)
    }
  };

    return (
    <Layout location="/" noHeader="true"  pathname={props.location.pathname}>
      <SEO title="Home"/>
      <Div100vh className="home-gallery home-slider" style={{ height: 'calc(100rvh - 60px)'}}>
        {(reducedVerticals && reducedVerticals.length > 0) &&
        <HomeGallery verticals={reducedVerticals} getSwiper={setSwiper} slideKey={currentSlideKey} params={params} goNext={goNext} goPrev={goPrev} />
        }
        <footer className="our-verticals-tabs d-flex">
            <div className="container d-flex">
              <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
                <li className={`nav-item d-flex align-items-center ${activeTab == `residential` && 'active'}`} onClick={() => updateSlideKey('residential-0', 'residential')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Residential_inactive icon"></span>
                    <span>Residential</span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${activeTab == `commercial` && 'active'}`} onClick={() => updateSlideKey('commercial-0', 'commercial')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Commercial_inactive icon"></span>
                    <span> Commercial </span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${activeTab == `hospitality` && 'active'}`} onClick={() => updateSlideKey('hospitality-0', 'hospitality')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Hospitality_inactive icon"></span>
                    <span>Hospitality</span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${activeTab == `leisure-club` && 'active'}`} onClick={() => updateSlideKey('leisure-club-0', 'leisure-club')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Leisure_inactive icon"></span>
                    <span>Leisure</span>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
      </Div100vh>
    </Layout>
  )
}

export default IndexPage

export const pageDataResidential = graphql` {
  prismicResidential {
    type
    data {
      gallery {
        project_url
        image {
          url
          mobile {
            url
          }
          logo {
            url
          }
        }
      }
    }
  }

  prismicCommercial {
    type
    data {
      banner {
        url
        mobile{
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
  prismicHospitality {
    type
    data {
      banner {
        url
        mobile {
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
  prismicLeisureClub {
    type
    data {
      banner {
        url
        mobile {
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
}`
