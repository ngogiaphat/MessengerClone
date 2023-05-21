"use client";
import { SessionProvider } from "next-auth/react";
export interface AuthenticationProps{children: React.ReactNode;}
export default function AuthContext({children}: AuthenticationProps){return <SessionProvider>{children}</SessionProvider>;}