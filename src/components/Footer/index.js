import React from 'react';
import { FooterContainer } from './styles';
import { IoLogoFacebook } from 'react-icons/io';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';





export function Footer() {
  return (
    <FooterContainer>
      <a 
      href="http://google.com" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <IoLogoFacebook className="footerIcon" />
      </a>

      <a 
      href="http://google.com" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <FaPinterest className="footerIcon" />
      </a>

      <a 
      href="http://google.com" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <FaInstagram className="footerIcon" />
      </a>
      
    </FooterContainer>
  )
}