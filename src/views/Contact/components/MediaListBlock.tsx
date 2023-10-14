import { IconButton, Stack } from '@mui/material'
import Link from 'next/link'
import mediaList from '~/data/mock/mediaList'

const MediaListBlock = () => {
  return (
    <Stack direction="row" spacing={3}>
      {mediaList.map(({ icon, url }, index) => (
        <Link key={index} href={url} target="_blank">
          <IconButton sx={{ p: 0 }}>{icon}</IconButton>
        </Link>
      ))}
    </Stack>
  )
}

export default MediaListBlock
