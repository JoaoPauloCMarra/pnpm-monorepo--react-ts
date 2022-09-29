import { cleanup, fireEvent, render } from '@testing-library/react';

import TestWrapper from '../TestWrapper';

import Button from '.';

const onClick = jest.fn();
const text = 'Sample Button';

describe('Button', () => {
  afterEach(cleanup);

  it('it renders with proper text and onClick works', () => {
    const { getByTestId, unmount } = render(<Button onClick={onClick}>{text}</Button>, { wrapper: TestWrapper });

    const button = getByTestId('button');
    expect(button).toHaveTextContent(text);
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);

    unmount();
  });
});
