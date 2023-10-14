'use client'
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
  FormHelperText
} from '@mui/material'
import { FC } from 'react'

export interface FormControlProps extends MuiFormControlProps {
  errorMessage?: string | null
}

export const FormControl: FC<FormControlProps> = ({
  errorMessage,
  error,
  children,
  ...rest
}) => {
  const isError = !!errorMessage || error

  return (
    <MuiFormControl {...rest}>
      {children}

      <FormHelperText error={isError}>{errorMessage || ' '}</FormHelperText>
    </MuiFormControl>
  )
}
