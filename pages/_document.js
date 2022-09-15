import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-b from-[#dbd3c6] to-gray-200 text-[#45301a] dark:from-slate-700 dark:to-slate-800 dark:text-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
