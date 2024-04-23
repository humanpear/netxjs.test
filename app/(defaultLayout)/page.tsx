import Button from '@/compotnents/Button'

const title = '내 사이트 현재 페이지의 제목'
const description = '내 사이트 현재 페이지의 설명'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/`,
    images: 'https://nextjs-movie-app-steel.vercel.app/main.jpg',
    siteName: '내 사이트의 이름',
    locale: 'ko_KR'
  }
}

export default function Home() {
  return (
    <>
      <Button>로그인</Button>
      <Button>회원가입</Button>
    </>
  )
}
