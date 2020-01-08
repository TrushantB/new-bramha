import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo";

class ManagementTeam extends React.Component {
    render(){
        return(
            <Layout>
            <SEO title="Management Team"/>
                <h3>
                    Hello, This Is Management Team Page...
                </h3>
            <Footer/>
            </Layout>
        )
    }
}
export default ManagementTeam;