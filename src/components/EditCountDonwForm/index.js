import React from "react";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import moment from 'moment';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import usLocale from 'date-fns/locale/en-US';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import {useNavigate} from "react-router";
import {Title} from '../Title'
import { InputMessage, StyledForm, StyledButton } from "./styles";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputMessageError } from "../InputMessageError";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darken, lighten } from "polished";

const themeSite = {
  palette: {
    mode: 'dark',
    primary: {
      light: lighten(0.2, '#fb6087'),
      main: '#fb6087',
      dark: darken(0.1, '#fb6087'),
      contrastText: '#fff'
    },
  },
}

const materialTheme = createTheme(themeSite)

function isDateNew(date, time) {
  const day = moment(date).get('date');
  const month = moment(date).get('month');
  const year = moment(date).get('year');
  const hour = moment(time).get('hour');
  const minute = moment(time).get('minute');
  const second = moment(time).get('second');

  const formDate = new Date(year, month, day, hour, minute, second)
  const today = new Date();

  const isAfter = moment(formDate).isAfter(today)
  console.log(isAfter)

  return isAfter;

}

const countDownSchema = yup.object().shape({
  text: yup
    .string(),
  date: yup
    .date()
    .nullable()
    .test(
      'Test if formDate is after today',
      'Date must be after today',
      (_, form) => isDateNew(form.parent.date, form.parent.time) === true 
    )
    .required('Required *'),
  time: yup
    .date()
    .nullable()
    .test(
      'Test if formDate is after today',
      'Date must be after today',
      (_, form) => isDateNew(form.parent.date, form.parent.time) === true 
    )
    .required('Required *'),
});

export function EditCountDownForm({handleSaveForm}) {
  let navigate = useNavigate();
  

  const {
    handleSubmit, formState, control, reset, clearErrors
  } = useForm({
    resolver: yupResolver(countDownSchema),
    defaultValues: {
      text: '',
      date: null,
      time: null,
    },
  });
  const { errors } = formState;

  function saveForm(values) {
    handleSaveForm(values)
    reset()
    clearErrors()
    navigate('/countDown')
  }

  function cancelForm() {
    reset()
    clearErrors()
    navigate('/countDown')
  }

  return (
    <StyledForm 
      onSubmit={handleSubmit(saveForm)} 
    >
      <Title text="Set Time and Message"/>
      <div>
        <Controller 
          control={control}
          name="text"
          render={({field: {onChange, value, ref}}) => (
            <InputMessage 
              inputRef={ref}
              value={value} 
              onChange={onChange} 
              label="Message" 
              variant="outlined" 
              size="small" 
              fullWidth 
            />
          )}
        />

        {!!errors.text && (
          <InputMessageError message={errors.text.message} />
        )}
        
      </div>

      <div className="timeContainer">
        <ThemeProvider theme={materialTheme} >
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={usLocale}>

          <div className="inputContainer">
            <Controller 
              control={control}
              name="date"
              render={({field: {onChange, value, ref}}) => (
                <MobileDatePicker
                  className="datePicker"
                  views={['day', 'month', 'year']}
                  minDate={new Date()}
                  fullWidth
                  inputRef={ref}
                  label="Date"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <InputMessage size="small" $error={!!errors.date} {...params}/>}
                />
              )}
            />
            {!!errors.date && (
              <InputMessageError message={errors.date.message} />
            )}
          </div>

          <div className="inputContainer">
            <Controller 
              control={control}
              name="time"
              render={({field: {onChange, value, ref}}) => (
                <MobileTimePicker
                  views={['hours', 'minutes', 'seconds']}
                  ampm={false}
                  inputFormat="HH:mm:ss"
                  inputRef={ref}
                  label="Time"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <InputMessage size="small" $error={!!errors.time} {...params} />}
                />
              )}
            />
            {!!errors.time && (
              <InputMessageError message={errors.time.message} />
            )}
            
          </div>
        </LocalizationProvider>
        </ThemeProvider>
      </div>


      <div className="buttonsContainer">
        <StyledButton
          $disabled={localStorage.getItem('countDownConfig') === null}
          disabled={localStorage.getItem('countDownConfig') === null}
          className="submitButton"
          type="button" 
          onClick={cancelForm}
        >
          Cancel
        </StyledButton>

        <StyledButton
          type="button" 
          onClick={handleSubmit(saveForm)}
        >
          Save
        </StyledButton>
      </div>

     
    </StyledForm>
  );
}