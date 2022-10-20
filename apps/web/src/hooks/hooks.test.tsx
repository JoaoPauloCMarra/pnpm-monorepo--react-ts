import { cleanup, renderHook, waitFor } from '@testing-library/react';
import TestWrapper from 'ui-library/TestWrapper';

import { MOCK_USER_INFO } from './mocks';
import useUserInfo from './useUserInfo';

describe('Hooks', () => {
  afterEach(cleanup);

  it('useUserInfo works as expected', async () => {
    const { result, unmount } = renderHook(() => useUserInfo(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data).toEqual(MOCK_USER_INFO);

    unmount();
  });
});
