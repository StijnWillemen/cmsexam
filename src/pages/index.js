import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import {Image,Wrapper,BottomEdgeDown, BottomEdgeUp,Artist} from "./pageStyles/pageStyles"
import SEO from "../components/seo"

const IndexPage = () => {

  const {
    wpcontent:{
      page:{
        home:{
          description,
          title,
          featuredMovies,
          bannerFoto
        }
      }
    }
  }=useStaticQuery(graphql`
  query
  {
    wpcontent {
      page(id: "home", idType: URI) {
        home {
          featuredMovies {
            ... on WPGraphql_Movie {
              slug
              movie {
                title
                releaseYear
                cover {
                  altText
                  sourceUrl
            imageFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
                }
              }
            }
          }
          title
          description
          bannerFoto {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  
              }
            }
          }
        }
        }
      }
    }
  }
`)
console.log(featuredMovies)
  return (
    
  <Layout>
    <SEO title="Home" />
    <Wrapper>
    <div className="banner"><Image fluid={bannerFoto.imageFile.childImageSharp.fluid} alt={bannerFoto.altText}></Image>
    <div className="inner-div">
      <p className="header-title">{title}</p>
      <p className="header-description">{description}</p>
    </div>
    <BottomEdgeDown color={"black"}></BottomEdgeDown>
    </div>
    <div className="description">
      <p>{description}</p>
      <BottomEdgeUp color={"black"}></BottomEdgeUp>
    </div>
    <div className="artists"> 
    <h2>Featured Movies</h2>
    <div className="artist-items">
    {featuredMovies.map(({movie,slug})=>(
      <Artist to={`/${slug}`}>
        <Image fluid={movie.cover.imageFile.childImageSharp.fluid} altText={movie.cover.altText}></Image>
        <div className="artist-info">
          <p>{movie.title}</p>
          <p>{movie.releaseYear}</p>
        </div>
      </Artist>
    ))}

    </div>
    </div>
    </Wrapper>
  </Layout>
)}

export default IndexPage
