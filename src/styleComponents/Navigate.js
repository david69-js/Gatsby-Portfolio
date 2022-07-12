
import styled from 'styled-components'
const NavigateStyle = styled.div`
    width: 100%;
    position: fixed;
    background-color:${( { Open }) => Open ? '#000000d4' : '#00000000'};
    top: 0;
    right: 0;
    margin-top: 0;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    z-index:1000;
    height:${( { Open }) => Open ? '100%' : '100%'};
    @media( max-width: 767px){
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
    }
    @media (min-width: 767px){
        height:75px;
        background: transparent ;
    }
    .hidde{
        position: fixed;
        width:100%;
        height: 100%;
        background: #000000;
        opacity: 0.5;
        top: 0;
        left: 0;
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
        @media (min-width: 767px){
            transform: translateX(-100%);
        }
    }
    .nav-links{
        z-index: 100;
        list-style: none;
        display:flex;
        width: 100%;
        position: relative;
        top: -14px;
        padding: 0 20px;
        @media( max-width: 767px){
            width: 500px;
            height: 100%;
            flex-flow: column nowrap;
            padding-top: 3rem;
            justify-content: center;
        }
        @media( max-width: 508px){
            width: 100% !important;
        }
        img{
            @media (max-width: 767px){
                display: none !important;
            }
        }
        ul{
            gap: 15px;
            li{
                color: white;
                z-index:1;
                a{
                    font-size: 35px;
                    font-weight: bold;
                    @media (min-width: 767px){
                        font-size: 20px;
                    }
                }
            }
        }
    }
    
`;

export default NavigateStyle;