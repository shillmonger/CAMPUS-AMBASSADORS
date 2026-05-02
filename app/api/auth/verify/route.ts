import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { passcode } = await request.json();
    
    const adminCode = process.env.NEXT_PUBLIC_ADMIN_CODE || "1234";
    
    if (passcode === adminCode) {
      // Set authentication cookie
      const response = NextResponse.json({ 
        success: true, 
        message: 'Authentication successful' 
      });
      
      response.cookies.set('adminAuthenticated', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      });
      
      return response;
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid passcode' 
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Authentication failed' 
      },
      { status: 500 }
    );
  }
}
