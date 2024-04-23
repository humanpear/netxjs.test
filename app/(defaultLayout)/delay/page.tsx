import { revalidatePath } from 'next/cache'

type ResponseValue = {
  message: string
  time: string // ISO 8601
}

export default async function AsyncPage({
  searchParams
}: {
  searchParams: { revalidate?: 'true' }
}) {
  const endpoint = 'https://api.heropy.dev/v0/delay?t=1000'
  if (searchParams.revalidate === 'true') {
    revalidatePath(endpoint)
  }
  const res = await fetch(endpoint)
  const data: ResponseValue = await res.json()
  return <h1>{data.time}</h1>
}
