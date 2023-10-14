'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Grid, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { PhoneField, RadioGroupField, TextField } from '~/components/fields'
import subjectOptions from '~/data/mock/subjectOptions'
import { ContactUsSchema } from '~/validation/schemas/user.schemas'

type ContactUsFV = z.infer<typeof ContactUsSchema>

export const ContactUsForm = () => {
  const methods = useForm<ContactUsFV>({
    defaultValues: {
      subject: 'general_inquiry_1'
    },
    resolver: zodResolver(ContactUsSchema),
    mode: 'all'
  })

  const onSubmit = (values: ContactUsFV) => {
    console.log('fetchDTO', values)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          width: '100%',
          px: { xs: '16px', md: 0 },
          pt: { xs: 0, md: '50px' },
          alignItems: 'center'
        }}
      >
        <Stack maxWidth={{ xs: '100%', md: '595px' }}>
          <Grid container spacing={5} rowSpacing={{ xs: 0.4, md: 3.5 }}>
            <Grid item xs={12} md={6}>
              <TextField name="first_name" label="First Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField name="last_name" label="Last Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField name="email" label="Email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <PhoneField name="phone_number" label="Phone Number" />
            </Grid>
          </Grid>

          <RadioGroupField
            name="subject"
            title="Select Subject?"
            options={subjectOptions}
            gridContainerProps={{
              sx: {
                paddingLeft: '3px',
                paddingRight: '7px',
                maxWidth: '552px'
              }
            }}
            gridItemProps={{
              xs: 6,
              md: 3
            }}
          />

          <TextField
            name="message"
            label="Message"
            placeholder="Write your message.."
            formControlProps={{ sx: { mt: { xs: '4px', md: '22px' } } }}
          />

          <Stack
            alignItems="end"
            width="100%"
            marginTop={{ xs: '7px', md: '29px' }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: { xs: '13px', md: '16px' },
                minWidth: { xs: '100%', md: '214px' },
                height: { xs: '39px', md: '54px' }
              }}
            >
              Send Message
            </Button>
          </Stack>

          <Stack
            sx={{
              height: { xs: '64px', md: '151px' },
              mr: '81px',
              backgroundImage: 'url(/static/airplane.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: { xs: 'bottom center', md: 'bottom right' },
              backgroundSize: 'contain'
            }}
          />
        </Stack>
      </Stack>
    </FormProvider>
  )
}
