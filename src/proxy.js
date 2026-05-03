import { NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {

  // console.log(request, 'request')

   const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session, 'session')

  // const isLoggedIn = true

  if(session){
    // jaite dibeni tomare
    return NextResponse.next();   
  }
  return NextResponse.redirect(new URL('/login', request.url))


  // jaite dibe na sorto chara
}

export const config = {
  matcher: ['/career', '/news/:path*'],
}