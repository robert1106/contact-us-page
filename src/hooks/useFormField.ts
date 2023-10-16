/**
 * The useFormField hook allows you to control and manipulate field values.
 * Under the hood useFormField relies on react-hook-form context.
 * That means you need to specify a name for start to control a field.
 */

'use client'
import { get } from 'object-path'
import { ChangeEvent, useCallback } from 'react'

import { useController, UseControllerProps } from 'react-hook-form'

const useFormField = ({ name }: UseControllerProps) => {
  const { field, formState } = useController({
    name
  })

  const error = get(formState.errors, name)?.message || null

  const onChange = useCallback(
    (value: ChangeEvent<HTMLInputElement> | any) => {
      field.onChange(value)
    },
    [field.onChange]
  )

  return { field, error, onChange, value: field.value }
}

export default useFormField
