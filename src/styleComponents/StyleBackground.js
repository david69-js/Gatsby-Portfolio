import styled from 'styled-components'
const StyleBackground = styled.div`
    background-image:linear-gradient(rgb(0 0 0 / 80%),rgb(24 30 72 / 50%)), url( ${( { bg_image }) => bg_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit:cover;
    object-position:50% 50%;
    background-attachment:fixed;
    @media all and (orientation:portrait){
        height: 100vh;
    }

    @media all and (orientation:landscape){
        height: auto;
        padding: 40px 0 ;
    }
    @media (min-height: 700px){
        height: 100vh;
    }
    display: flex;
    justify-content: center;
    align-self: center;
    flex-flow: column;
`
export default StyleBackground