import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.nextUrl.searchParams.get("location") || "");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
