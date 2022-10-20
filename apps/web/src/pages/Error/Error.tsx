import { FC } from 'react';

import { Container, Message, Title } from './styles';

const Error: FC = () => {
  return (
    <Container>
      <Title>We broke something</Title>
      <Message>sorry, come back later</Message>
    </Container>
  );
};

export default Error;
