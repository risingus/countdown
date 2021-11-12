import React from 'react';
import { FooterContainer } from './styles';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer({isEdit}) {
  return (
    <FooterContainer>
      <a 
      href="https://www.facebook.com/gustavo.lima.961556" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <FaFacebookSquare className="footerIcon" />
      </a>

      <a 
      href="https://www.linkedin.com/in/gustavo-lima-44b425b1/" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <FaLinkedin className="footerIcon" />
      </a>

      <a 
      href="https://github.com/risingus" 
      rel="noreferrer" 
      target="_blank"
      className="footerLink"
      >
        <FaGithub className="footerIcon" />
      </a>

      {
        isEdit === false && (
          <Link alt="Edit CountDown" to="/editCountDown" className="footerLink">
            <FaRegEdit className="footerIcon" />
          </Link>
        )
      }

     
      
    </FooterContainer>
  )
}