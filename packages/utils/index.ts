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

export const apiGet = async <T>({ route, mock }: { route: string; mock?: T }) => {
  if (process.env.NODE_ENV === 'test') {
    return mock as T;
  }

  const response = await fetch(`https://joaopaulocmarra.npkn.net/sandbox${route}`);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return (await response.json()) as T;
};
