import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import {Image,Wrapper,BottomEdgeDown, BottomEdgeUp,Artist} from "./pageStyles/pageStyles"
import SEO from "../components/seo"


const MoviePage = () => {
    const {wpcontent: {
      page:{movies:{
        description,
        bannerFoto
      },
      },
      movies:{edges:movies}
      
    },
  }=useStaticQuery(graphql`

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
      movies {
        edges {
          node {
            movie {
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
              title
              releaseYear
              plot
              genre
            }
            slug
          }
        }
      }
    
  }


   

    
    
    
  } 
`)
console.log(bannerFoto)
    return (
      <Layout>
        <SEO title="Movies"></SEO>
        <Wrapper>
          <div className="banner">
            <Image fluid={bannerFoto.imageFile.childImageSharp.fluid} altText={bannerFoto.altText}></Image>
            <BottomEdgeDown></BottomEdgeDown>
          </div>
          <div className="description">
            <h2>Take a look at our movies!</h2>
            <p>{description}</p>
            <BottomEdgeUp></BottomEdgeUp>
          </div>
          <div className="artists">
            <h2>All Movies</h2>
            <div className="artist-items">
              {movies.map(({node:{movie,slug}})=>(
                <Artist to={`/${slug}`} key={slug}>
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
        
        
    )
}

export default MoviePage