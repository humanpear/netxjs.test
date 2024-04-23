export default function Layout({
  children,
  xWrap
}: {
  children: React.ReactNode
  xWrap: React.ReactNode
}) {
  return (
    <>
      {children}
      {xWrap}
    </>
  )
}
