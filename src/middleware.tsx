import { NextResponse } from "next/server";

export function middleware(request: NextResponse) {
  console.log("middleware");

  return NextResponse.redirect(new URL("/revive-motors", request.url));
}

export const config = {
  matcher: ["/revive-motors"], //yo yo path xa vane redirect garxa to "/" page ma
};
