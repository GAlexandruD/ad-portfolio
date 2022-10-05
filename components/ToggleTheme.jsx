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
      className="cursor-pointer text-lg hover:text-green-800 "
    >
      {theme === 'dark' ? (
        <FaMoon className="h-6 w-6" />
      ) : (
        <FaSun className="h-6 w-6" />
      )}
    </button>
  )
}

export default ToggleTheme
