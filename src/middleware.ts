// Import Modules
import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['http://localhost:3000', 'https://accounts.google.com'];

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const origin = request.headers.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
        if (request.method === 'OPTIONS') {
            return NextResponse.json({}, { headers: corsHeaders });
        }
        Object.entries(corsHeaders).forEach(([key, value]) => {
            response.headers.append(key, value);
        });
        return response;
    }
}

export const config = {
    matcher: '/api/:path*',
};
