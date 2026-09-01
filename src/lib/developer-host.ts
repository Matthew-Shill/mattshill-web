export const DEVELOPER_HOST = "developer.mattshill.com";
export const DEVELOPER_ORIGIN = `https://${DEVELOPER_HOST}`;

export function hostnameFromHeader(hostHeader: string | null) {
  return (hostHeader ?? "").split(":")[0].toLowerCase();
}

export function isDeveloperHost(hostHeader: string | null) {
  return hostnameFromHeader(hostHeader) === DEVELOPER_HOST;
}
