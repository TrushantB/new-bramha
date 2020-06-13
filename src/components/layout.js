import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import PhoneInput from 'react-phone-number-input';
import Header from "./header";
import "./layout.css";
import Footer from "./footer";

const Layout = ({ children, pathname, className }) => {
  // const [contactFlag, setContactFlag] = useState(false);
  // const [mailFlag, setMailFlag] = useState(false);
  // const [chatFlag, setChatFlag] = useState(false);

  // const contactFlagTrueFalse = () => setContactFlag(!contactFlag);
  // const mailFlagTrueFalse = () => setMailFlag(!mailFlag);
  // const chatFlagTrueFalse = () => setChatFlag(!chatFlag);

  const [value, setValue] = useState("+91");

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      prismicCompanyDetails {
        data {
          tagline {
            html
          }
         followus {
          title1{
            text
          }
          link {
            url
          }
          }
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} pathname={pathname} />
      <main className={className}>{children}</main>
      {
        pathname=='/' ? null :
        <Footer footerLinks={data.prismicCompanyDetails.data.followus}/>
      }
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
