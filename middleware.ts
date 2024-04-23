import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware!', request.nextUrl.pathname)
  // if (request.nextUrl.pathname === '/signin') {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
  return NextResponse.next()
}
