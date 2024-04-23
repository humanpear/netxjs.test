import { signIn } from '@/serverActions'

export default function Page() {
  return (
    <>
      <h1>로그인</h1>
      <form action={signIn}>
        <label>
          Email
          <input
            name="email"
            type="email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
          />
        </label>
        <button type="submit">SIGN IN!</button>
      </form>
    </>
  )
}
