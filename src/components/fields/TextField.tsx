'use client'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps
} from '@mui/material/TextField'
import { FC } from 'react'
import { UseControllerProps } from 'react-hook-form'
import { FormControl, FormControlProps } from '~/components/base'

import useFormField from '~/hooks/useFormField'

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'name'> {
  name: UseControllerProps['name']
  formControlProps?: FormControlProps
}

export const TextField: FC<TextFieldProps> = ({
  name,
  formControlProps,
  ...rest
}) => {
  const { field, error, onChange, value } = useFormField({
    name
  })

  return (
    <FormControl errorMessage={error} {...formControlProps}>
      <MuiTextField
        {...field}
        error={!!error}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </FormControl>
  )
}
