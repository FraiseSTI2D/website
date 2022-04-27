import { useEffect, useState } from 'react'

export function useOpenedMounted(defaultValue: boolean = false) {
  const [opened, setOpened] = useState<boolean>(defaultValue)
  useEffect(() => {
    if (!opened) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  }, [])

  return { opened }
}
