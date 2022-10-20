import { useMutation } from '@tanstack/react-query';
import { apiCall } from 'utils';

import { MOCK_USER_INFO } from './mocks';

import queryClient from '~/QueryClient';

const useUpdateLanguage = () =>
  useMutation(
    (language: string) =>
      apiCall<string, { language: string }>({
        method: 'POST',
        route: '/user-language',
        data: { language },
        mock: MOCK_USER_INFO.language,
      }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(['userInfo']);
      },
    },
  );

export default useUpdateLanguage;
