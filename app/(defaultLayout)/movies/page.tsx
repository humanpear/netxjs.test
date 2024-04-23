import Link from 'next/link'

export interface ResponseValue {
  Search: Search[]
  totalResults: string
  Response: string
}

export interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default async function MoviesPage({
  searchParams: { title }
}: {
  searchParams: { title?: string }
}) {
  const res = await fetch(`/api/movies?title=${title}`)
  const { Search: movies, Response }: ResponseValue = await res.json()
  console.log('Response', Response)
  if (Response === 'False') {
    throw new Error('영화를 검색할 수 없습니다!')
  }
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// http://localhost:3000/movies/?title=avengers
