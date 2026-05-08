import { useState } from 'react'
import Navigate from './Navigate'
import StyledBurger from '../../styleComponents/Burger'

const Burger = ({ data, logo }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger $open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Navigate $open={open} navigation={data} logo_image={logo} />
    </>
  )
}

export default Burger
