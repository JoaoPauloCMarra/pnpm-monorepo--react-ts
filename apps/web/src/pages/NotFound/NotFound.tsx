import { FC } from 'react';

import { Container, Message, Title } from './styles';

const NotFound: FC = () => {
  return (
    <Container>
      <Title>Not Found</Title>
      <Message>sorry, the page you are looking for does not exist</Message>
    </Container>
  );
};

export default NotFound;
