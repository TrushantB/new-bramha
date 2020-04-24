import React, {useState} from 'react'
import { Link } from "gatsby";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

function HomeGallery(props) {
    const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    updateOnWindowResize: true
  }

  return (
    <div className="bramha-swiper">
      <Swiper getSwiper={props.getSwiper} {...params} activeSlideKey={props.slideKey}>
        {
          (props.verticals && props.verticals.length > 0) && props.verticals.map((item) => {
            return (
              <div key={item.itemIndex} className="banner-wrapper">
                <Link to={`/residential/${item.project_url}`}>
                  <picture>
                    <source media="(max-width: 581px)" srcSet={item.image.mobile.url} />
                    {
                      <img src={item.image.url} className="banner-img" style={{ width: '100%' }} />
                    }
                  </picture>
                </Link>
              </div>
            )
          })
        }
      </Swiper>
      <button className="slick-prev" onClick={props.goPrev}>Prev</button>
      <button className="slick-next" onClick={props.goNext}>Next</button>
    </div>

  )
}

export default HomeGallery
