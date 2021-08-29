import React, { ReactNode, useState } from 'react';
// import { ReactComponent as HooryIcon } from '@hoory/assets/icons/hoory-avatar.svg';
// import { ReactComponent as DebugIcon } from '@hoory/assets/icons/debug.svg';
import {
  StyledErrorWrapper,
  StyledErrorIcon,
  StyledErrorMessage,
  StyledErrorTitle,
  StyledErrorDetails,
  StyledErrorAction
} from '../styles';

type Props = {
  title: string;
  actions: ReactNode[];
  error: Error;
  errorInfo: React.ErrorInfo | null;
};

const ErrorWrapper = ({ title = '', actions = [], error, errorInfo }: Props) => {
  const [showError, setShowError] = useState(false);

  const handleShowErrorDetails = () => {
    setShowError(!showError);
  };

  return (
    <StyledErrorWrapper>
      <StyledErrorIcon onClick={handleShowErrorDetails} key="icon">
        {/* {showError ? <DebugIcon /> : <HooryIcon />} */}
      </StyledErrorIcon>
      <StyledErrorTitle key="title">{title}</StyledErrorTitle>
      <StyledErrorMessage key="message">{error.toString()}</StyledErrorMessage>
      <StyledErrorAction key="actions">{actions}</StyledErrorAction>
      {showError && (
        <>
          <StyledErrorDetails key="detail">
            {error?.name}
            {error?.message}
            {error?.stack}
          </StyledErrorDetails>
          <StyledErrorDetails key="stack">{errorInfo?.componentStack}</StyledErrorDetails>
        </>
      )}
    </StyledErrorWrapper>
  );
};

export default ErrorWrapper;
