import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Blog extends React.Component {
  render(){
    const blogPostData = this.props.data.allPrismicBlog.edges;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title='Blog'/>
        {/* <!-- Knowledge Hub Start here --> */}
        <section className="page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">Blog</h2>
          </div>
              <div className="Knowledge-hub-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="row knowledge-hub-images">
                {
                  blogPostData.map((item, index) => {
                    return(
                      <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                        <Link to={`/blog-details/${ item.node.uid}`} className="text-decoration-none">
                          <div className="blog-card">
                            <div className="blog-card-img-wrap">
                              <img className="blog-card-img-top" src={item.node.data.banner.url} alt="Card image"/>
                            </div>
                            <div className="blog-card-body">
                              <p className="blog-card-text">{item.node.data.title.text}</p>
                              <p className="blog-date">{item.node.data.date}</p>	
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
          </section>
        <Footer/>
      </Layout>
    )
  } 
}
export default Blog;

export const blogPost = graphql` {
  allPrismicBlog {
    edges {
      node {
        uid
        data {
          title {
            text
          }
          banner {
            url
          }
          date
        }
      }
  	}
	}
}`