import { headers } from "next/headers";
import { isArtistHost } from "@/lib/artist-host";
import { SITE_URL } from "@/lib/site";

function requestHost(headerList: Headers) {
  return headerList.get("x-forwarded-host") ?? headerList.get("host");
}

/** Artist home: `/` on music.mattshill.com, `/artist` locally. */
export async function getArtistHomeHref() {
  const headerList = await headers();
  return isArtistHost(requestHost(headerList)) ? "/" : "/artist";
}

/** Lessons site home — always the teaching site, not this EPK. */
export async function getLessonsHref() {
  const headerList = await headers();
  return isArtistHost(requestHost(headerList)) ? SITE_URL : "/";
}
