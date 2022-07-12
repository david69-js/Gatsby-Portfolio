import { isBrowser } from "../globlas/window";
const SmoothScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href').split('/')[1];    
    const location = document.querySelector(target).offsetTop;
    const moveDeskOrMobile = window.innerWidth <= 767 ? 0 : 75;
    if(isBrowser) {
        window.scrollTo({
            left:0,
            top: location - moveDeskOrMobile
        })
    }
}

export default SmoothScroll