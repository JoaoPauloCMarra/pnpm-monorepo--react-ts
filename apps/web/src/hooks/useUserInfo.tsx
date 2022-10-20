import { useQuery } from '@tanstack/react-query';
import { apiCall } from 'utils';

import { MOCK_USER_INFO } from './mocks';

const useUserInfo = () =>
  useQuery<UserInfo, Error>(['userInfo'], () =>
    apiCall<UserInfo>({
      method: 'GET',
      route: '/me',
      mock: MOCK_USER_INFO,
    }),
  );

export default useUserInfo;
