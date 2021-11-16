import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { shade } from 'polished';


export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 1rem 0 1rem;

  .timeContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
  }

  .buttonsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

`;

export const StyledButton = styled.button`
  height: 2.5rem;
  background: ${({theme, $disabled }) => $disabled ? 'rgba(144, 144, 144, .1)' : theme.colors.neutral.darkDesaturatedBlue};
  border: none;
  border-radius: .4rem;
  color: ${({theme, $disabled }) => $disabled ? 'gray' : theme.colors.neutral.white};
  transition: 0.2s linear;
  cursor: ${({$disabled }) => $disabled !== true && 'pointer'};

  :hover {
    background: ${({theme, $disabled }) => $disabled ? 'rgba(144, 144, 144, .1)' :theme.colors.primary.softRed};
  }
`;



export const InputMessage = styled(TextField)`
  &&& {

    label {
      color: ${({theme, $error }) => $error ? theme.colors.neutral.error : shade(0.1, '#fb6087')};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({theme, $error }) => $error ? theme.colors.neutral.error : shade(0.1, '#fb6087')};
    }

    .MuiInputBase-root {
      color: ${({theme, $error }) => $error ? theme.colors.neutral.error : shade(0.1, '#fb6087')};
    }
  }
`;

