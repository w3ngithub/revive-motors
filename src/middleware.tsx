import { NextResponse } from "next/server";

export function middleware(request: NextResponse) {
  return NextResponse.redirect(new URL("/revive-motors", request.url));
}

export const config = {
  matcher: ["/revive-motors"],
};
