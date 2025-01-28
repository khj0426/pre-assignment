interface ErrorFallbackProps {
  errorMessage: string;
  resetErrorBoundary?: () => void;
}

export function ErrorFallback({
  errorMessage,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div
      role="alert"
      style={{
        padding: "20px",
        border: "1px solid red",
        backgroundColor: "#f8d7da",
        color: "#721c24",
      }}
    >
      <h2>{errorMessage}</h2>
      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        다시 시도하기
      </button>
    </div>
  );
}
