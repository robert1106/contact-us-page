'use client'
import { TextField, TextFieldProps } from '@mui/material'
import { UseControllerProps } from 'react-hook-form'
/**
 * React Number Format is an input-formatter library with a sophisticated
 * and lightweight caret engine.
 */
import { PatternFormat } from 'react-number-format'
import { FormControl } from '~/components/base'
import useFormField from '~/hooks/useFormField'

export interface PhoneField {
  name: UseControllerProps['name']
  label?: TextFieldProps['label']
}

export const PhoneField = ({ name, ...rest }: PhoneField) => {
  const {
    field: { onBlur },
    error,
    onChange,
    value
  } = useFormField({
    name
  })

  const handleChange = (value: string) => {
    const transformValue = value.slice(3) ?? ''
    onChange(transformValue)
  }

  return (
    <FormControl errorMessage={error}>
      <PatternFormat
        customInput={TextField}
        valueIsNumericString={true}
        error={!!error}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={onBlur}
        value={value}
        format="+1 ### #### ###"
        prefix="+1 ___ ____ ___"
        mask=" "
        {...rest}
      />
    </FormControl>
  )
}
