import React , {useState} from 'react'
import Navigate from './Navigate'
import StyledBurger from '../../styleComponents/Burger';

const Burger = ({data, logo}) => {

    const [ Open, setOpen] = useState(false)
    return (
        <>
        <StyledBurger Open={Open} onClick={() => setOpen(!Open)}>  
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <Navigate Open={Open} navigation={data} logo_image={logo}/>
        </>
    )
}

export default Burger