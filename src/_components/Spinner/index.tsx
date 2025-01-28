import { CSSProperties } from "react";
import styled from "styled-components";

interface SpinnerProps {
  color?: CSSProperties["color"];
  size?: CSSProperties["height"];
}

export function Spinner({ color = "#007bff", size = "100px" }: SpinnerProps) {
  return <StyledSpinner color={color} size={size} />;
}

const StyledSpinner = styled.div<{
  size: CSSProperties["height"];
  color: CSSProperties["color"];
}>`
  weight: ${({ size }) => `${size}`};
  height: ${({ size }) => `${size}`};
  border: 8px solid ${({ color }) => color};
  border-radius: 50%;
  animation: spin 1s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
