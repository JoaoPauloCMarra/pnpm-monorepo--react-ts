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

interface ApiGetParams {
  route: string;
  mock?: unknown;
}

export const apiGet = async ({ route, mock }: ApiGetParams) => {
  if (process.env.NODE_ENV === 'test') {
    return mock;
  }

  const response = await fetch(`https://joaopaulocmarra.npkn.net/sandbox${route}`);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return await response.json();
};
