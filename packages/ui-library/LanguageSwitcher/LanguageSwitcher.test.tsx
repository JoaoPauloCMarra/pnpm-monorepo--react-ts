import { cleanup, fireEvent, render } from '@testing-library/react';

import TestWrapper from '../TestWrapper';

import LanguageSwitcher from '.';

const onLanguageChange = jest.fn();

describe('LanguageSwitcher.test', () => {
  afterEach(cleanup);

  it('it renders with proper text and onClick works', () => {
    const { getAllByTestId, unmount } = render(
      <LanguageSwitcher disabled={false} language="es" onLanguageChange={onLanguageChange} />,
      {
        wrapper: TestWrapper,
      },
    );

    const button = getAllByTestId('button');
    const englishButton = button[0];
    expect(englishButton).toHaveTextContent('en');
    expect(onLanguageChange).toBeCalledTimes(0);
    fireEvent.click(englishButton);
    expect(onLanguageChange).toBeCalledTimes(1);

    unmount();
  });
});
