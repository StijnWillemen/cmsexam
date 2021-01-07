import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Wrapper,Image} from '../templateStyles/artistStyles'
import { COLORS } from '../constants';



const MovieTemplate=({data:
  {wpcontent:
    {movie:
      {movie,
        genres:{edges:genres}
      }
    }
  }
})=>{
    return(
        
        <Layout>
        <SEO title="Movie"/>
            <Wrapper>
            <div className="artist-container">
              
              <div className="artist-image">
              <Image fluid={movie.cover.imageFile.childImageSharp.fluid} loading="lazy"></Image>
            <div className="roles">
              {genres.map(({node:genre})=>(
                <div key={genre.name} className="role">{genre.name}</div>
              ))}
              </div>
              </div>
              <div className="artist-info" color={COLORS.PRIMARY}>
                <h2>{movie.title}</h2>
                <h3><span>{movie.releaseYear}</span></h3>
                <p className="description">{movie.plot}</p>
                
            </div>

              
            </div>
            </Wrapper>
        
        </Layout>
  
    )
}

export default MovieTemplate

export const pageQuery=graphql`
query($id:ID!)
{
  wpcontent {
    movie(idType: ID, id: $id) {
      movie {
        title
        releaseYear
        plot
        cover{
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
      genres {
        edges {
          node {
            name
          }
        }
      }
    }
  }
}
`