import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo";
import aboutus from '../styles/images/contact-page.jpg';
import { Link } from 'gatsby';

class ManagementTeam extends React.Component {
    render(){
        return(
            <Layout>
            <SEO title="Management Team"/>
                <div className="container mt-5 mb-5">
                <h1 className="text-center mb-5"> Management Team Page </h1>
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
                        <Link to='/'> Back To Home Page </Link>
                        </div>
                        <div className="col-lg-6"> 
                        <img src={aboutus} className="w-100 h-100"/>
                        </div>
                    </div>
                </div>
            <Footer/>
            </Layout>
        )
    } 
}
export default ManagementTeam;