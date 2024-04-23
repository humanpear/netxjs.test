import { roboto } from '@/styles/fonts'
import '@/styles/global.scss'

export const metadata = {
  title: {
    template: `%s | 나의 사이트!!`,
    default: '나의 사이트!!'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={roboto.variable}>
      <body>{children}</body>
    </html>
  )
}
