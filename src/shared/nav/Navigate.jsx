import { Link } from 'gatsby';
import React,  {useEffect, useRef } from 'react'
import NavigateStyle  from '../../styleComponents/Navigate'
import SmoothScroll  from '../../hooks/smooth-scroll';
import { isBrowser } from '../../globlas/window';

const Navigate = ({ Open, logo_image, navigation }) => {
    const NavigateListening = useRef(null);
      useEffect(() => {
        if (isBrowser) {
          const handleScroll = (event) => {
            event.preventDefault();
            if (window.scrollY >= document.querySelector('#home').getBoundingClientRect().height-75) return NavigateListening.current.classList.add('navigate-white');      
              NavigateListening.current.classList.remove('navigate-white');
            };
  
            window.addEventListener('scroll', handleScroll);
  
          return () => {
            window.removeEventListener('scroll', handleScroll);
    
          };
        }
      }, []);

    return (
        <NavigateStyle Open={Open} id="navigate" ref={NavigateListening}>
            <div className="hidde"></div>
           
           <div className="nav-links  justify-between container mx-auto">
            <img drawable="false" src={logo_image} width="100px" alt='code'/>
            <ul className="nav flex items-center flex-col md:flex-row">
               {
                    navigation.map((item, index) => {
                       return (
                        <li key={index}>
                            <Link
                            onClick={index >= 1 ?  SmoothScroll : null}
                            to={'#'+item.slug_page.text}
                            >{item.text_link.text}</Link></li>
                       )
                    })
               }
            </ul>
           </div>
        </NavigateStyle>
    )
}

export default Navigate