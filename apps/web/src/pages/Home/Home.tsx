import { FC, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from 'ui-library/Button';
import LanguageSwitcher from 'ui-library/LanguageSwitcher';

import { Container, Title } from './styles';

import useUpdateLanguage from '~/hooks/useUpdateLanguage';
import useUserInfo from '~/hooks/useUserInfo';
import { countState } from '~/store/countDownStore';

const Home: FC = () => {
  const navigate = useNavigate();
  const { data, refetch, isLoading: loadingUserInfo } = useUserInfo();
  const { mutateAsync, isLoading: savingLanguage } = useUpdateLanguage();
  const count = useRecoilValue(countState);

  const onLanguageChange = useCallback(
    async (language: string) => {
      try {
        await mutateAsync(language);
      } catch (error) {
        //
      }
    },
    [mutateAsync],
  );

  return (
    <Container>
      <Title>Home Page</Title>
      <br />
      <Button onClick={() => navigate('/about')}>Go to About Page</Button>
      <br />
      {!loadingUserInfo ? <p>Language: {data?.language}</p> : <p>wait...</p>}
      <LanguageSwitcher
        disabled={loadingUserInfo || savingLanguage}
        language={data?.language}
        onLanguageChange={onLanguageChange}
      />
      <br />
      <br />
      <Button bg="gray-600" color="white" onClick={() => refetch()} size="sm">
        manual refetch user data
      </Button>
      <pre>
        <code>{!loadingUserInfo ? JSON.stringify(data, null, 2) : 'loading...'}</code>
      </pre>
      <p>clicks from about page: {count}</p>
    </Container>
  );
};

export default Home;
