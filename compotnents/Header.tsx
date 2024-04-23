import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">메인</Link>
          </li>
          <li>
            <Link href="/signin">로그인</Link>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
          <li>
            <Link href="/movies/tt4154796">어벤져스 상세</Link>
          </li>
          <li>
            <Link href="/movies?title=avengers">어벤져스 목록</Link>
          </li>
          <li>
            <Link href="/async">비동기 컴포넌트 스트리밍</Link>
          </li>
          <li>
            <Link href="/parallel">경로 병렬 처리</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
