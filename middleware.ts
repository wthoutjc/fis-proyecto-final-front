import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const token = req.cookies.get("request_token");

  if (req.nextUrl.pathname === "/") {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname === "/delete") {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (
    req.nextUrl.pathname.startsWith("/home") ||
    req.nextUrl.pathname.startsWith("/new") ||
    req.nextUrl.pathname.startsWith("/document") ||
    req.nextUrl.pathname.startsWith("/delete")
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
