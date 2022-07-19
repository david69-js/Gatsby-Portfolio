import React from 'react';
import MyImage from '../hooks/LazyLoad';
import Github from '../images/github.png'
import Linkedin from '../images/in.png'
import Mail from '../images/mail.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer_container container mx-auto">
            <div className="footer_head pt-10 text-center">
                <h2 className="footer_title">Let's Start</h2>
            </div>
            <div className="footer_blocks flex mx-auto px-6 pt-6 justify-center gap-3">
                <div className="footer_first_block"><a target="_blank" href="https://github.com/david69-js"><MyImage className="icon-link" image={Github} /></a></div>
                <div className="footer_second_block"><a target='_blank' href="https://www.linkedin.com/in/david-toj-alvarez-4aa7481b2"><MyImage className="icon-link" image={Linkedin} /></a></div>
                <div className="footer_third_block"><a target='_blank' href="mailto:tojalvarezdavid@gmail.com"><MyImage className="icon-link" image={Mail} /></a></div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;