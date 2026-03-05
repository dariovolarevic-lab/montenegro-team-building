import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SECRET = 'mtb2026'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Always allow static assets and the coming-soon page itself
  if (
    pathname.startsWith('/coming-soon') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Secret param ?preview=mtb2026 → set cookie and enter site
  if (searchParams.get('preview') === SECRET) {
    const url = request.nextUrl.clone()
    url.searchParams.delete('preview')
    const response = NextResponse.redirect(url)
    response.cookies.set('preview', SECRET, { maxAge: 60 * 60 * 24 * 30, path: '/' })
    return response
  }

  // Check cookie
  const cookie = request.cookies.get('preview')
  if (cookie?.value === SECRET) {
    return NextResponse.next()
  }

  // Everyone else → Coming Soon
  return NextResponse.redirect(new URL('/coming-soon', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
