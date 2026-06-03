const requestMap = new Map<
  string,
  {
    count: number;
    timestamp: number;
  }
>();

const WINDOW_MS = 1000 * 60 * 10;
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string) {
  const now = Date.now();

  const existing = requestMap.get(ip);

  if (!existing) {
    requestMap.set(ip, {
      count: 1,
      timestamp: now,
    });

    return true;
  }

  if (now - existing.timestamp > WINDOW_MS) {
    requestMap.set(ip, {
      count: 1,
      timestamp: now,
    });

    return true;
  }

  if (existing.count >= MAX_REQUESTS) {
    return false;
  }

  existing.count++;

  requestMap.set(ip, existing);

  return true;
}