import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      <div>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </div>
    </>
  );
};

export default ErrorPage;
