import { useCallback, useState } from 'react'

type UseModalReturn = [boolean, () => void, () => void]

const useModal = (): UseModalReturn => {
  const [open, setOpen] = useState(false)

  const showModal = useCallback(() => setOpen(true), [])
  const hideModal = useCallback(() => setOpen(false), [])

  return [open, showModal, hideModal]
}

export default useModal
