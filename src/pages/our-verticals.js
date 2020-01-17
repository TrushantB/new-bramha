import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
class OurVerticals extends React.Component {
    render(){
        return(
            <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
                <h3>
                    Hello, This Is OurVerticals Page...
                </h3>
                <Footer />
            </Layout>
        )
    }
}
export default OurVerticals;