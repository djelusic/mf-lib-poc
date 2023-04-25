import React, { FC, Suspense, LazyExoticComponent } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const mfComponentWithFallback = <P extends {}>(
  RemoteComponent: LazyExoticComponent<FC<P>>,
  FallbackComponent: FC<P>
): FC<P> => {
  return (props: P) => {
    return (
      <ErrorBoundary fallback={<FallbackComponent {...props} />}>
        <Suspense fallback={null}>
          {/* @ts-ignore */}
          <RemoteComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
};
