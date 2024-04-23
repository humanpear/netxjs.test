import type { NextRequest } from 'next/server'

export const GET = async (
  request: NextRequest,
  context: { params: { movieId: string } }
) => {
  const { movieId } = context.params
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieId}`
  )
  const movie = await res.json()
  return Response.json(movie)
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  return Response.json(body)
}

export const PUT = async (request: NextRequest) => {
  const body = await request.json()
  return Response.json(body)
}
