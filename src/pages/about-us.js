import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
class AboutUs extends React.Component {
    render(){
        const data = this.props.data.prismicAboutus.data;
        return(
            <Layout>
                <h3> {data.sub_title.text}</h3>
                <h5>{data.title.text}</h5>
                <p> {data.description.text}</p>
            </Layout>
        )
    }
}
export default AboutUs;

export const AboutPage = graphql`{
    prismicAboutus {
      data {
        sub_title{
            text
        }
        title {
            text
        }
        description {
            text
        }
        image {
            url
        }
      }
    }
}
`