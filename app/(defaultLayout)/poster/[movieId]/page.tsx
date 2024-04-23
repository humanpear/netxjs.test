import Image from 'next/image'

type Movie = {
  // 응답 결과 타이핑
  Title: string
  Poster: string
}

export default async function MoviePoster({
  params,
  searchParams // 쿼리스트링
}: {
  params: { movieId: string }
  searchParams: { plot?: 'short' | 'full' }
}) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}&plot=${searchParams.plot || 'short'}`
  )
  const movie: Movie = await res.json()
  return (
    <Image
      src={movie.Poster.replace('SX300', 'SX700')}
      alt={movie.Title}
      width="300"
      height="450"
    />
  )
}
