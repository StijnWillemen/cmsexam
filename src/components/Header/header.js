import { useStaticQuery,graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {HeaderWrapper} from "./headerStyles/headerStyles"
import Menu from "./menu"



const Header = ({ siteTitle }) => {

const {
wpcontent: {menuItems},

}=useStaticQuery(graphql`
{
  wpcontent {
    menuItems {
      edges {
        node {
          path
          label
        }
      }
    }
  }
}
`
)

return(
  <HeaderWrapper><Menu menuItems={menuItems.edges}></Menu></HeaderWrapper>
)
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
