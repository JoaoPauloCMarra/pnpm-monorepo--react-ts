import { Component, ErrorInfo, ReactNode } from 'react';

import { logError } from 'utils';

import Button from '../Button';

import { Container, Message, Title } from './styles';

interface Props {
  children?: ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: '',
  };

  constructor(props: Props) {
    super(props);
    this.onRetryClick = this.onRetryClick.bind(this);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: String(error) };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError('A ErrorBoundary report:', `${String(error)} - ${String(errorInfo)}`);
  }

  onRetryClick() {
    if (this.props.onRetry) {
      this.props.onRetry();
    }
    this.setState({ hasError: false, message: '' });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title>Oops, there was an issue!</Title>
          <Message>{this.state.message}</Message>
          <Button data-testid="errorboundary-button" onClick={this.onRetryClick}>
            Try again?
          </Button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
