/* eslint-disable no-console */

import { cleanup } from '@testing-library/react';

import { apiGet, logError } from '.';

describe('Utils Package', () => {
  afterEach(cleanup);

  it('logError works as expected', () => {
    logError('Sample Title', 'Sample Message');

    expect(console.warn).toBeCalledTimes(0);
    expect(console.log).toBeCalledTimes(0);
    expect(console.error).toBeCalledTimes(2);
  });

  it('apiGet works as expected', async () => {
    const mock = 'worked';
    const response = await apiGet<string>({
      route: '/jest',
      mock,
    });

    expect(response).toBe(mock);
  });
});
