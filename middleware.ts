import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected admin routes
const adminRoutes = [
  '/admin-dashboard/dashboard',
  '/admin-dashboard/delete',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is an admin route
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    // Check for authentication in sessionStorage (client-side) or cookie (server-side)
    const authCookie = request.cookies.get('adminAuthenticated');
    
    // If not authenticated, redirect to admin login
    if (!authCookie) {
      const loginUrl = new URL('/admin-dashboard', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin-dashboard/:path*',
  ],
};
