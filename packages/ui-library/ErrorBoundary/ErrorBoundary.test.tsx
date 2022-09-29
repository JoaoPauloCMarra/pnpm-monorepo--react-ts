import { cleanup, fireEvent, render } from '@testing-library/react';

import TestWrapper from '../TestWrapper';

import ErrorBoundary from '.';

const ThrowError = () => {
  throw new Error('Test');
};

const onRetry = jest.fn();

describe('Error Boundary', () => {
  afterEach(cleanup);

  it('it renders with proper text and onRetry works', () => {
    const { getByText, getByTestId, unmount } = render(
      <ErrorBoundary onRetry={onRetry}>
        <ThrowError />
      </ErrorBoundary>,
      { wrapper: TestWrapper },
    );

    const message = getByText('Oops, there was an issue!');
    expect(message).toBeInTheDocument();

    const retryButton = getByTestId('errorboundary-button');
    expect(retryButton).toHaveTextContent('Try again?');
    expect(onRetry).toBeCalledTimes(0);
    fireEvent.click(retryButton);
    expect(onRetry).toBeCalledTimes(1);

    unmount();
  });
});
