import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from '../components/seo'
class Partners extends React.Component {
    render(){
        return(
            <Layout>
                <SEO title="Partner"/>
                <h3>
                    Hello, This Is Partners Page...
                </h3>
                <Footer />
            </Layout>
        )
    }
}
export default Partners;