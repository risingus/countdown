import React from "react";
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import usLocale from 'date-fns/locale/en-US';
import {Title} from '../Title'
import { DateInput, InputMessage, StyledForm, TimeInput } from "./styles";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputMessageError } from "../InputMessageError";


const countDownSchema = yup.object().shape({
  text: yup
    .string(),
  date: yup
    .date()
    .required('Required *'),
  time: yup
    .date()
    .required('Obrigatório *'),
});

export function EditCountDownForm({handleSaveForm, handleCancelForm}) {
  

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

  function cancelForm() {
    reset()
    clearErrors()
    handleCancelForm()
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleSaveForm)}>
      <Title text="CountDown Configuration"/>
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
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={usLocale}>

          <div>
            <Controller 
              control={control}
              name="date"
              render={({field: {onChange, value, ref}}) => (
                <DateInput
                  inputRef={ref}
                  inputVariant="outlined"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  ampm={false}
                  autoOk
                  size="small"
                  label="Date"
                  // disablePast
                  format="dd/MM/yyyy"
                  views={['date', 'month', 'year']}
                />
              )}
            />
            {!!errors.date && (
              <InputMessageError message={errors.date.message} />
            )}
          </div>

          <div>
            <Controller 
              control={control}
              name="time"
              render={({field: {onChange, value, ref}}) => (
                <TimeInput
                  inputRef={ref}
                  onChange={onChange}
                  value={value}
                  size="small"
                  inputVariant="outlined"
                  ampm={false}
                  openTo="hours"
                  views={["hours", "minutes", "seconds"]}
                  format="HH:mm:ss"
                  label="Time"
                  fullWidth
                />
              )}
            />
            {!!errors.time && (
              <InputMessageError message={errors.time.message} />
            )}
            
          </div>
        </MuiPickersUtilsProvider>
      </div>


      <div className="buttonsContainer">
        <button
          className="submitButton"
          type="button" 
          onClick={cancelForm}
        >
          Cancel
        </button>

        <button
          className="submitButton"
          type="button" 
          onClick={handleSubmit(handleSaveForm)}
        >
          Save
        </button>
      </div>

     
    </StyledForm>
  );
}