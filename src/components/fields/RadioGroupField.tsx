'use client'
import {
  FormControlLabel,
  Grid,
  GridProps,
  RadioGroup,
  RadioGroupProps
} from '@mui/material'
import { FC, ReactNode } from 'react'
import { UseControllerProps } from 'react-hook-form'
import { FormControl, Text } from '~/components/base'
import { Radio } from '~/components/inputs'
import useFormField from '~/hooks/useFormField'

interface Options {
  value: string
  label: string
}

interface RadioGroupFieldProps extends Omit<RadioGroupProps, 'title'> {
  name: UseControllerProps['name']
  title?: string | ReactNode
  options: Options[]
  gridItemProps?: GridProps
  gridContainerProps?: GridProps
}

export const RadioGroupField: FC<RadioGroupFieldProps> = ({
  name,
  title,
  options,
  gridItemProps,
  gridContainerProps,
  ...rest
}) => {
  const { field, onChange, value } = useFormField({
    name
  })

  return (
    <FormControl>
      {!!title && (
        <Text
          size="overline"
          sx={{
            fontSize: '14px',
            mt: { xs: '7px', md: '28px' },
            mb: { xs: '5px', md: '9px' }
          }}
        >
          {title}
        </Text>
      )}

      <RadioGroup {...field} onChange={onChange} value={value} {...rest}>
        <Grid container spacing={{ xs: 0.2, md: 1 }} {...gridContainerProps}>
          {options.map(({ value, label }) => (
            <Grid item key={value} {...gridItemProps}>
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={<Text size="subtitle2">{label}</Text>}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}
