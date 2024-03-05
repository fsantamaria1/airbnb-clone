'use server';
import { cookies } from "next/headers";

// Set cookies

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    cookies().set('session_user_id', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // Set the max age to one week
        maxAge: 60 * 60 * 24,
        path: '/'
    })
    cookies().set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // Set the max age to one hour
        maxAge: 60 * 60,
        path: '/'
    })
    cookies().set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // Set the max age to one week
        maxAge: 60 * 60 * 24,
        path: '/'
    })
}

export async function resetAuthCookies() {
    cookies().set('session_user_id', '')
    cookies().set('session_access_token', '')
    cookies().set('session_refresh_token', '')
}

// Get cookies

export async function getUserId() {
    const userId = cookies().get('session_user_id')?.value
    return userId ? userId: null
}