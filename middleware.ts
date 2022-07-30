import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const token = req.cookies.get("__Secure-next-auth.session-token") || req.cookies.get("next-auth.session-token");

  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (
    req.nextUrl.pathname.startsWith("/home") ||
    req.nextUrl.pathname.startsWith("/new")
  ) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
};

export { middleware };
