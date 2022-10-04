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

export const apiGet = async <T>({ route, mock, baseUrl }: { route: string; mock?: T; baseUrl?: string }) => {
  if (process.env.NODE_ENV === 'test') {
    return mock as T;
  }

  const response = await fetch(`${baseUrl || 'http://localhost:3000'}${route}`);

  if (!response.ok) {
    const message = `${response.status}: ${response.statusText}`;
    logError('utils-apiGet Error:', message);
    throw new Error(message);
  }

  return (await response.json()) as T;
};
