/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React,{useState} from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "./layout.css"

import Hamburger from "./Header/hamburger"
import OverlayMenu from "./Header/OverlayMenu"


const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen]=useState(false);

  const handleOverlayMenu=()=>{setMenuOpen(menuOpen=>!menuOpen);}


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hamburger handleOverlayMenu={handleOverlayMenu}></Hamburger>
      <OverlayMenu handleOverlayMenu={handleOverlayMenu} menuOpen={menuOpen}></OverlayMenu>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `auto`,
          padding: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{backgroundColor:"#0E3F71"}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
