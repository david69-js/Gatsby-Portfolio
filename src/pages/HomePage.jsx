import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/heroHome'
import About from '../components/About'
import Projects from '../components/Projects'

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Projects />
  </Layout>
)

export default HomePage
