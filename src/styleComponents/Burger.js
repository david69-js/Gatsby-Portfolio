import styled from 'styled-components'
const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    z-index: 110;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    z-index: 10000;
    @media(min-width: 767px){
        display:none ;
    }
    
    div{
        width: 2rem;
        height: 0.25rem;
        background: ${( { Open }) => Open ? '#cecccc' : '#cecccc' };
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${( { Open }) => Open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${( { Open }) => Open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${( { Open }) => Open ? 0 : 1 };
        }
        &:nth-child(3) {
            transform: ${( { Open }) => Open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`
export default StyledBurger