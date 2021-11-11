import styled from 'styled-components';
import {
  DatePicker,
  TimePicker
} from '@material-ui/pickers';
import { TextField } from "@material-ui/core";


export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 1rem 0 1rem;

  .timeContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .buttonsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .submitButton {
      height: 2.5rem;
      background: ${({theme }) => theme.colors.neutral.darkDesaturatedBlue};
      border: none;
      border-radius: .4rem;
      color: ${({theme }) => theme.colors.neutral.white};
      transition: 0.2s linear;

      :hover {
        background: ${({theme }) => theme.colors.primary.softRed};
      }
    }
  }

  

`;

export const InputMessage = styled(TextField)`
  &&& {
   
    label {
      color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiInputBase-root {
      color: ${({theme }) => theme.colors.neutral.white};
    }
  }
`;

export const DateInput = styled(DatePicker)`
  &&& {

    label {
      color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({theme }) => theme.colors.neutral.white};
      color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiInputBase-root {
      color: ${({theme }) => theme.colors.neutral.white};
    }

  }
`;

export const TimeInput = styled(TimePicker)`
  &&& {
    label {
      color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({theme }) => theme.colors.neutral.white};
      color: ${({theme }) => theme.colors.neutral.white};
    }

    .MuiInputBase-root {
      color: ${({theme }) => theme.colors.neutral.white};
    }
  }
`;


