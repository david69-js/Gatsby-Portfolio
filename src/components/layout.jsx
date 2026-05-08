import { memo } from "react"
import Header from "./header"
import "../styles/index.scss"
import Footer from "./Footer"
import { usePrismicData } from '../prismic/hooks'

const Layout = ({ children }) => {
  const { data } = usePrismicData('header')
  const header = data?.[0]?.data

  return (
    <>
      <Header navItems={header?.header_navigation} logoNav={header?.logo_header?.url} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default memo(Layout)
