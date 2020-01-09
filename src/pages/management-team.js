import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo";

class ManagementTeam extends React.Component {
    render(){
        return(
            <Layout>
            <SEO title="Management Team"/>

                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-lg-6 mt-5">
                        <h2 className="mb-4"> Management Team Page </h2>
                        <p>
                        BramhaCorp is one of today's leading business groups headquartered 
                        in Pune. Our businesses encompass real estate development, 
                        hospitality, retail and leisure. The vision and dynamism of
                        the founders has seen the group making remarkable strides. 
                        Our achievements over the last 35 years are landmarks that have
                        set precedents. In 1998, we were the first to bring the premium
                        hospitality brand - Le Meridien, now Sheraton Grand to Pune. 
                        The Residency Club was the first lifestyle leisure club that 
                        set up. In 2003, we launched the first hi-tech 'SunCity',
                        a residential gated community that became benchmark thereafter.
                        </p>
                        </div>
                        <div className="col-lg-6 mt-5">
                        <h5 className="mb-4"> Hello, This Is Management Team Page... </h5>
                        
                        <p>
                        BramhaCorp is one of today's leading business groups headquartered 
                        in Pune. Our businesses encompass real estate development, 
                        hospitality, retail and leisure. The vision and dynamism of
                        the founders has seen the group making remarkable strides. 
                        Our achievements over the last 35 years are landmarks that have
                        set precedents. In 1998, we were the first to bring the premium
                        hospitality brand - Le Meridien, now Sheraton Grand to Pune. 
                        The Residency Club was the first lifestyle leisure club that 
                        set up. In 2003, we launched the first hi-tech 'SunCity',
                        a residential gated community that became benchmark thereafter.
                        </p>
                        </div>
                    </div>
                </div>


            <Footer/>
            </Layout>
        )
    } 
}
export default ManagementTeam;