import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#dbd3c6] text-[#45301a] dark:bg-[#45301a] dark:text-[#dbd3c6]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
