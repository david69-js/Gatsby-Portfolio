import * as React from "react"
import Burger from "../shared/nav/Burger"

const Header = ({ navItems, logoNav }) => (
  <header>
  <Burger data={navItems} logo={logoNav}/>
  
  </header>
)

export default Header
