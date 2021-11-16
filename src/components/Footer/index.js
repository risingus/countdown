import React from 'react';
import { FooterContainer } from './styles';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export function Footer({isEdit, isConfigured}) {
  return (
    <FooterContainer>

      <div className="footerLinks">

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
          <Link alt="Edit CountDown" to="/edit" className="footerLink">
            <FaRegEdit className="footerIcon" />
          </Link>
        )
      }

      {
        isConfigured && (
          <Link alt="Edit CountDown" to="/countDown" className="footerLink">
            <FaStopwatch className="footerIcon" />
          </Link>
        )
      }

      </div>
     

    <span>
      Coded with ❤️ by Gustavo Lima
    </span>
    </FooterContainer>
  )
}