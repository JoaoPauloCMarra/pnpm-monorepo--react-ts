import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Container } from './styles';

export interface Props extends PropsWithChildren {
  disabled?: boolean;
  active?: boolean;
  activeBg?: string;
  activeBorder?: string;
  activeColor?: string;
  bg?: string;
  border?: string;
  color?: string;
  size?: Sizes;
  'data-testid'?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<Props> = ({ children, 'data-testid': testId = 'button', ...props }) => (
  <Container data-testid={testId} {...props}>
    {children}
  </Container>
);

export default Button;
