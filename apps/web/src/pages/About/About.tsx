import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'ui-library/Button';

import { Container, Paragraph, Title } from './styles';

import useUserInfo from '~/hooks/useUserInfo';
import { countState } from '~/store/countDownStore';

const About: FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useRecoilState(countState);
  const { data, isLoading: loadingUserInfo } = useUserInfo();

  return (
    <Container>
      <Title>About Page</Title>
      <br />
      <Button onClick={() => navigate('/')}>Go to Home Page</Button>
      <br />
      <p>clicks count: {count}</p>
      <Button bg="green-400" color="black" onClick={() => setCount(Number(count) + 1)}>
        add to count
      </Button>
      <br />
      {loadingUserInfo ? (
        <Paragraph>loading...</Paragraph>
      ) : (
        <Paragraph>user selected language: {data?.language}</Paragraph>
      )}
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam ipsum quo excepturi similique
        odio ipsa nesciunt illo inventore totam illum provident, reprehenderit quidem quasi soluta incidunt doloremque
        dolor maiores.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam ipsum quo excepturi similique
        odio ipsa nesciunt illo inventore totam illum provident, reprehenderit quidem quasi soluta incidunt doloremque
        dolor maiores.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam ipsum quo excepturi similique
        odio ipsa nesciunt illo inventore totam illum provident, reprehenderit quidem quasi soluta incidunt doloremque
        dolor maiores.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam ipsum quo excepturi similique
        odio ipsa nesciunt illo inventore totam illum provident, reprehenderit quidem quasi soluta incidunt doloremque
        dolor maiores.
      </Paragraph>
    </Container>
  );
};

export default About;
