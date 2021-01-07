import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import {Image,Wrapper, BottomEdgeUp,Artist} from "../pageStyles/pageStyles"
import SEO from "../components/seo"
import { COLORS } from "../constants"

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
                fluid(quality: 50) {
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
                fluid(quality:25) {
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

  return (
    
  <Layout>
    <SEO title="Home" />
    <Wrapper>
    <div className="banner"><Image fluid={bannerFoto.imageFile.childImageSharp.fluid} alt={bannerFoto.altText} loading="lazy"></Image>
    <div className="inner-div">
      <p className="header-title">{title}</p>
      
    </div>
    <BottomEdgeUp color={COLORS.SECONDARY}></BottomEdgeUp>
    </div>
    <div className="description">
      <p>{description}</p>
      <BottomEdgeUp color={COLORS.SECONDARY}></BottomEdgeUp>
    </div>
    <div className="artists"> 
    <h2>Featured Movies</h2>
    <div className="artist-items">
    {featuredMovies.map(({movie,slug})=>(
      <Artist key={movie.title} to={`/${slug}`}>
        <Image fluid={movie.cover.imageFile.childImageSharp.fluid} altText={movie.cover.altText} loading="lazy"></Image>
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
