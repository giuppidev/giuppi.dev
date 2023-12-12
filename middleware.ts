import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "./types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.nextUrl.pathname || "asdasd");

  return NextResponse.next({
    ...res,
    request: {
      headers: requestHeaders,
    },
  });
}
