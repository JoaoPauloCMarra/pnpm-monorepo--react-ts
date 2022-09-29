import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Container } from './styles';

interface Props extends PropsWithChildren {
  active?: boolean;
  'data-testid'?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<Props> = ({ children, 'data-testid': testId = 'button', ...props }) => (
  <Container data-testid={testId} {...props}>
    {children}
  </Container>
);

export default Button;
