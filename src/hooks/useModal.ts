/**
 * The useBoolean hook used for handle boolean-based states in React components.
 */

'use client'
import { useCallback, useState } from 'react'

type UseModalReturn = [boolean, () => void, () => void]

const useModal = (): UseModalReturn => {
  const [open, setOpen] = useState(false)

  const showModal = useCallback(() => setOpen(true), [])
  const hideModal = useCallback(() => setOpen(false), [])

  return [open, showModal, hideModal]
}

export default useModal
