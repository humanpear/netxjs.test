export default async function Xyz() {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return (
    <>
      <h1>XYZ!</h1>
    </>
  )
}
