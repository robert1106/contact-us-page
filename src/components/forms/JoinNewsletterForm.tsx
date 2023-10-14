'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Text } from '~/components/base'
import { TextWithButtonField } from '~/components/fields'
import { palette } from '~/theme/mui'
import { JoinNewsletterSchema } from '~/validation/schemas/user.schemas'

type JoinNewsletterFV = z.infer<typeof JoinNewsletterSchema>

export const JoinNewsletterForm = () => {
  const methods = useForm<JoinNewsletterFV>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(JoinNewsletterSchema),
    mode: 'all'
  })

  const onSubmit = (values: JoinNewsletterFV) => {
    console.log('fetchDTO', values)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        spacing={{ xs: 2.8, md: 3.8 }}
        sx={{
          p: { xs: '18px 30px 15px 14px', md: '12px 14px 21px' },
          backgroundColor: palette.secondary.main,
          maxWidth: { sx: '320px', md: '304px' },
          borderRadius: '10px'
        }}
      >
        <Text size={{ xs: 'body2', md: 'body1' }} color={palette.common.white}>
          Join Our Newsletter
        </Text>

        <Stack direction="column">
          <TextWithButtonField
            name="email"
            placeholder="Your email address"
            buttonLabel="Subscribe"
            buttonProps={{ type: 'submit' }}
          />

          <Text
            size="button"
            color={palette.common.white}
            sx={{ opacity: 0.5, pr: '20px' }}
          >
            * Will send you weekly updates for your better tool management.
          </Text>
        </Stack>
      </Stack>
    </FormProvider>
  )
}
