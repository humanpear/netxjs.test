import { Suspense } from 'react'
import Abc from './Abc'
import Xyz from './Xyz'
import Loader from '@/compotnents/Loader'

export default async function AsyncPage() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      <h1>비동기 페이지</h1>
      <Suspense fallback={<Loader />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Xyz />
      </Suspense>
    </>
  )
}
