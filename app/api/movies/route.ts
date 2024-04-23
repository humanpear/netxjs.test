import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchParams.get('title')}`
  )
  const { Search: movies } = await res.json()
  return Response.json(movies)
}
