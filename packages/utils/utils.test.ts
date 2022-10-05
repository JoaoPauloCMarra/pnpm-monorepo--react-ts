/* eslint-disable no-console */

import { cleanup } from '@testing-library/react';

import { apiCall, logError } from '.';

describe('Utils Package', () => {
  afterEach(cleanup);

  it('logError works as expected', () => {
    logError('Sample Title', 'Sample Message');

    expect(console.warn).toBeCalledTimes(0);
    expect(console.log).toBeCalledTimes(0);
    expect(console.error).toBeCalledTimes(2);
  });

  it('GET apiCall works as expected', async () => {
    const mock = 'worked';
    const response = await apiCall<string>({
      method: 'GET',
      route: '/jest',
      mock,
    });

    expect(response).toBe(mock);
  });

  it('POST apiCall works as expected', async () => {
    const mock = 'worked';
    const data = { test: true };
    const response = await apiCall<string, { test: boolean }>({
      method: 'POST',
      route: '/jest',
      data,
      mock,
    });

    expect(response).toBe(mock);
  });

  it('PUT apiCall works as expected', async () => {
    const mock = 'worked';
    const data = { test: false };
    const response = await apiCall<string, { test: boolean }>({
      method: 'PUT',
      route: '/jest/1',
      data,
      mock,
    });

    expect(response).toBe(mock);
  });

  it('DELETE apiCall works as expected', async () => {
    const mock = 'worked';
    const response = await apiCall<string>({
      method: 'DELETE',
      route: '/jest/1',
      mock,
    });

    expect(response).toBe(mock);
  });
});
