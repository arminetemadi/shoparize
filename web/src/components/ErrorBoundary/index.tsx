import React, { Component } from 'react';
// import { Button } from 'antd';
// import { isDev } from '@hoory/helpers/global';
import ErrorWrapper from './components/ErrorWrapper';

type Props = {
  messages: {
    title: string;
    goHome: string;
    refresh: string;
  };
};
type State = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

class ErrorBoundary extends Component<Props, State, Props> {
  static defaultProps: Props = {
    messages: {
      title: 'Sorry! There is an unhandled exception',
      refresh: 'Refresh',
      goHome: 'Go Home'
    }
  };
  state: State = { hasError: false, error: null, errorInfo: null };

  // eslint-disable-next-line consistent-return
  static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo) {
    return { hasError: true, error, errorInfo };
  }

  handleForceRefreshPage() {
    window.location.reload();
  }

  handleGoToHome() {
    document.location.href = '/';
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // if (isDev()) {
      /* eslint-disable no-console */
      console.log('error: ' + error);
      console.log('componentStack: ' + errorInfo.componentStack);
      this.setState({ errorInfo });
    // }
  }

  render() {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;
    const { goHome, refresh, title } = this.props.messages;

    if (hasError && error) {
      return (
        <ErrorWrapper
          title={title}
          error={error}
          errorInfo={errorInfo}
          actions={[
            // <Button key="home" onClick={this.handleGoToHome}>
            //   {goHome}
            // </Button>,
            // <Button key="refresh" type="primary" onClick={this.handleForceRefreshPage}>
            //   {refresh}
            // </Button>
          ]}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
