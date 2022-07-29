import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (req.cookies.get("next-auth.session-token")) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/home")) {
    if (!req.cookies.get("next-auth.session-token")) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
};

export { middleware };

export const config = {
  matcher: ["/", "/home", "/auth/login", "/auth/signup"],
};
