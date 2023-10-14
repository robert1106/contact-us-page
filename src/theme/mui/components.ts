import { Components } from '@mui/material'
import palette from './palette'
import { fonts } from './typography'

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      },
      main: {
        display: 'flex',
        flex: 1
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.default,
        boxShadow: 'none'
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        width: '100%',
        backgroundColor: palette.common.white
      }
    }
  },
  MuiButton: {
    defaultProps: {
      size: 'large'
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontFamily: fonts.poppins,
        fontSize: '16px',
        fontWeight: 500
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      focused: true,
      size: 'small',
      variant: 'standard'
    },
    styleOverrides: {
      root: {
        color: '#8D8D8D',

        '& .MuiInputLabel-root.Mui-focused:not(.Mui-disabled, .Mui-error)': {
          color: '#8D8D8D'
        },

        '&:hover, &:focus-within': {
          color: 'black',

          '& .MuiInputLabel-root:not(.Mui-disabled, .Mui-error)': {
            color: 'black'
          }
        },

        '& .MuiInput-root': {
          color: 'inherit',

          '& .MuiInput-input': {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 500,
            padding: '8px 0 11px'
          },

          '&::after': {
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid'
          },

          '&:not(.Mui-disabled, .Mui-error)::after': {
            borderBottomColor: '#8D8D8D'
          },

          '&:focus-within:not(.Mui-disabled, .Mui-error):before ,&:hover:not(.Mui-disabled, .Mui-error):before':
            {
              borderBottom: '1px solid black',
              zIndex: 1
            }
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        transform: 'none',
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 500
      }
    }
  },
  MuiFormControl: {
    defaultProps: { fullWidth: true },
    styleOverrides: {
      root: {
        '& .Mui-error': {
          marginLeft: 0,
          marginRight: 0
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 500,
        margin: '3px 0 0'
      }
    }
  }
}

export default components
