import Abc from './@abc/page'
import Xyz from './@xyz/page'

export default async function AsyncPage({}) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      <h1>비동기 페이지</h1>
      <Abc />
      <Xyz />
    </>
  )
}
