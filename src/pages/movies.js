import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const MoviePage = () => {
    
const data=useStaticQuery(graphql`
query
{   
  wpcontent {
    page(id: "products", idType: URI) {
      movies {
        description
        bannerFoto {
            sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          altText
        }
      }
    }
  }
}
`

    
    )
    return (
        
        <div>tt</div>
    )
}