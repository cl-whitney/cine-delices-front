export function getUserIdFromToken(token: string | null): number | null {
  if (!token) return null;
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    const id = decoded?.userId ?? decoded?.id;
    return typeof id === "number" ? id : Number(id) || null;
  } catch {
    return null;
  }
}
