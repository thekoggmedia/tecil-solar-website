export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs = 10000
): Promise<T> {
  const timeoutPromise = new Promise<never>(
    (_, reject) => {
      setTimeout(() => {
        reject(
          new Error('Request timeout')
        );
      }, timeoutMs);
    }
  );

  return Promise.race([
    promise,
    timeoutPromise,
  ]);
}