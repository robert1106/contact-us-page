import {
  Button,
  ButtonProps,
  InputBase,
  InputBaseProps,
  Paper
} from '@mui/material'
import { UseControllerProps } from 'react-hook-form'
import { FormControl } from '~/components/base'
import useFormField from '~/hooks/useFormField'
import { palette } from '~/theme/mui'

interface TextWithButtonFieldProps extends InputBaseProps {
  name: UseControllerProps['name']
  buttonLabel?: string
  buttonProps?: ButtonProps
}

export const TextWithButtonField = ({
  name,
  buttonLabel = 'Send',
  buttonProps,
  ...rest
}: TextWithButtonFieldProps) => {
  const { field, error, onChange, value } = useFormField({
    name
  })

  return (
    <FormControl errorMessage={error}>
      <Paper
        sx={{
          p: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: palette.background.paper,
          width: '100%',
          height: '39px'
        }}
      >
        <InputBase
          {...field}
          error={!!error}
          onChange={onChange}
          value={value}
          sx={{
            fontSize: '11px',
            fontWeight: 400,
            px: '10px',
            color: palette.common.white
          }}
          {...rest}
        />
        <Button
          variant="contained"
          sx={{
            minWidth: '105px',
            fontSize: '12px',
            borderRadius: '0 4px 4px 0',
            height: '100%'
          }}
          {...buttonProps}
        >
          {buttonLabel}
        </Button>
      </Paper>
    </FormControl>
  )
}
