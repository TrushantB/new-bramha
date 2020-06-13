import React from 'react'
import Layout from '../components/layout'
class OurVerticals extends React.Component {
    render(){
        return(
            <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
                <h3>
                    Hello, This Is OurVerticals Page...
                </h3>
            </Layout>
        )
    }
}
export default OurVerticals;