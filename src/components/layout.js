/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderPrismicQuery {
      allPrismicHeader {
        edges {
          node {
            data {
              header_navigation {
                text_link {
                  text
                }
                slug_page {
                  text
                }
              }
               logo_header {
                 url
                }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header navItems={data.allPrismicHeader.edges[0].node.data.header_navigation} logoNav={data.allPrismicHeader.edges[0].node.data.logo_header.url}/>
      <div>
        <main>{children}</main>
        <footer>
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
