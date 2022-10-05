/* eslint-disable no-console */

export const logError = (title: string, message?: string) => {
  console.error('Error found:\n');
  if (message) {
    console.error(`${title}: ${message}`);
    return;
  }
  console.error(title);
  console.error('\n');
};

export const apiCall = async <T1, T2 = unknown>({
  method,
  route,
  baseUrl,
  data,
  mock,
}: {
  method: RestMethods;
  route: string;
  baseUrl?: string;
  data?: T2;
  mock?: T1;
}) => {
  if (process.env.NODE_ENV === 'test') {
    return mock as T1;
  }

  const response = await fetch(`${baseUrl || 'http://localhost:3000'}${route}`, {
    method,
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const message = `${response.status}: ${response.statusText}`;
    logError('utils-apiCall Error:', message);
    throw new Error(message);
  }

  return (await response.json()) as T1;
};
