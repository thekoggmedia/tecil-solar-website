export function successResponse(data: unknown, status = 200) {
  return new Response(
    JSON.stringify({
      success: true,
      data,
    }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function errorResponse(
  error: string,
  status = 500
) {
  return new Response(
    JSON.stringify({
      success: false,
      error,
    }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}