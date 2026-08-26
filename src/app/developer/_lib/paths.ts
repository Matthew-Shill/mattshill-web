import { headers } from "next/headers";
import { isDeveloperHost } from "@/lib/developer-host";

function requestHost(headerList: Headers) {
  return headerList.get("x-forwarded-host") ?? headerList.get("host");
}

/** Portfolio home: `/` on the subdomain, `/developer` on www. */
export async function getDeveloperHomeHref() {
  const headerList = await headers();
  return isDeveloperHost(requestHost(headerList)) ? "/" : "/developer";
}

/** Path under the portfolio, e.g. `/resume`. */
export async function getDeveloperHref(path: string) {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  const headerList = await headers();
  return isDeveloperHost(requestHost(headerList))
    ? suffix
    : `/developer${suffix}`;
}

export function resolvePortfolioHref(homeHref: string, href: string) {
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href.startsWith("/developer/")) {
    const rest = href.slice("/developer".length);
    return homeHref === "/" ? rest : href;
  }

  if (href === "/developer") {
    return homeHref;
  }

  if (href.startsWith("/")) {
    return homeHref === "/" ? href : `${homeHref}${href}`;
  }

  return href;
}
