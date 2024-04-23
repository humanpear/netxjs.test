import Image from 'next/image'

export async function generateMetadata({
  params: { movieId }
}: {
  params: { movieId: string }
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/movies/${movieId}`
  )
  const movie = await res.json()
  const title = movie.Title
  const description = movie.Plot
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/movie/${movieId}`,
      images: movie.Poster,
      siteName: '내 사이트의 이름',
      locale: 'ko_KR'
    }
  }
}

export default async function MovieIdPage({
  params: { movieId }
}: {
  params: { movieId: string }
}) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/${movieId}`)
  const movie = await res.json()
  return (
    <>
      <h1>Movie ID: {movieId}</h1>
      <h2>{movie.Title}</h2>
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={400}
        height={600}
      />
    </>
  )
}
//tt4520988
