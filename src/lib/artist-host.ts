export const ARTIST_HOST = "music.mattshill.com";
export const ARTIST_ORIGIN = `https://${ARTIST_HOST}`;

export function hostnameFromHeader(hostHeader: string | null) {
  return (hostHeader ?? "").split(":")[0].toLowerCase();
}

export function isArtistHost(hostHeader: string | null) {
  return hostnameFromHeader(hostHeader) === ARTIST_HOST;
}
