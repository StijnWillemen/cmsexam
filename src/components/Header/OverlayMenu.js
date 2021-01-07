import React from 'react';
import {useStaticQuery,graphql,Link} from 'gatsby';
import {CloseButton,MenuList, OverlayWrapper} from './headerStyles/headerStyles'


const OverlayMenu=({handleOverlayMenu,menuOpen})=>{
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
        `)
    
    return(
        <>
            {menuOpen && (
                <OverlayWrapper>
                    <CloseButton onClick={handleOverlayMenu}>x</CloseButton>
                    <Link to="/" style={{marginBottom:"1.5rem"}}>
                        
                    </Link>
                    <MenuList style={{flexDirection:"column"}}>
                    {menuItems.edges.map(({node:item},i) => (
                        <li key={i}><Link activeClassName="nav-active" to={item.path}>{item.label}</Link></li>
                    ))}
                    </MenuList>
                </OverlayWrapper>
            )}
        </>
    )
}

export default OverlayMenu