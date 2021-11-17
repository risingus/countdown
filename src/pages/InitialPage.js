import React from "react";
import { Base } from "../components/Base";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`

  span {
    color: ${({theme }) => theme.colors.neutral.white};
    letter-spacing: .1rem;
  }

  .link {
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;

    .icon {
      font-size: 2rem;
      color: ${({theme }) => theme.colors.primary.grayishBlue};
    }

    :hover {
      .icon {
        color: ${({theme }) => theme.colors.primary.softRed};
      }
    }
  }
  
`;


export function InitialPage({isConfigured}) {
  return (
    <Base>
        <Title text="Just Another CountDown" /> 
        <StyledDiv>
          <span>
            Click
            <Link alt="Edit CountDown" to="/edit" className="link">
              <FaRegEdit className="icon" />
            </Link>
            to start
          </span>

        </StyledDiv>
        
      <Footer isEdit={false} isConfigured={isConfigured} />
    </Base>
  );
}
