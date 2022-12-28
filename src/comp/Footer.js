import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    
      <section className="footer">
        <hr className="footer-seperator" />
        <section className="footer-social-media">
          <a href="https://github.com/divyej/SpaceExodus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" /> </a> 
        </section>
        <section className="footer-info">
          <section className="footer-info-left">
            <section className="footer-info__name">
                Exodus 3
            </section>
               
          </section>
          <section className="footer-info-center">
            <section className="footer-info__email">
            <FontAwesomeIcon icon={faMailBulk}/> mail@gmail.com
            </section>
            <section className="footer-info__terms">
              Terms and Conditions
              <br />
              Divye jain © 2022
            </section>
          </section>
          <section className="footer-info-right">
            <section className="footer-info__number">
              
            </section>
            <section className="footer-info__contact">

            <FontAwesomeIcon icon={faHome}  /> 
              <br />
                Team DAT
            </section>
          </section>
        </section>
        <hr className="footer-seperator" />
      </section>
    )
  
  
};

export default Footer;