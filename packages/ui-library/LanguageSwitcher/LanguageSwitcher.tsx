import { FC } from 'react';

import Button from '../Button';
import { GroupedButtons } from '../Button/styles';

import { Container } from './styles';

interface Props {
  language?: string;
  disabled?: boolean;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher: FC<Props> = ({ language, disabled, onLanguageChange }) => (
  <Container>
    <GroupedButtons>
      <Button
        active={language === 'en'}
        activeBg="blue-600"
        activeColor="white"
        bg="blue-400"
        color="white"
        disabled={disabled}
        onClick={() => (language === 'en' ? () => null : onLanguageChange('en'))}
      >
        en
      </Button>
      <Button
        active={language === 'pt'}
        activeBg="blue-600"
        activeColor="white"
        bg="blue-400"
        color="white"
        disabled={disabled}
        onClick={() => (language === 'pt' ? () => null : onLanguageChange('pt'))}
      >
        pt
      </Button>
      <Button
        active={language === 'es'}
        activeBg="blue-600"
        activeColor="white"
        bg="blue-400"
        color="white"
        disabled={disabled}
        onClick={() => (language === 'es' ? () => null : onLanguageChange('es'))}
      >
        es
      </Button>
    </GroupedButtons>
  </Container>
);

export default LanguageSwitcher;
