import * as React from "react"
import About from "../components/About"
import Home from "../components/Home"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home/>
    <About/>
    <Projects/>
  </Layout>
)

export default IndexPage
