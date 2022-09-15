import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  // Themes should only be available for client. It doesn't make sense to change the theme for the server.
  // 1.Detect when running on client. It will sent mount to true when running on the client.
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
      className="m-2 cursor-pointer text-lg "
    >
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ToggleTheme
