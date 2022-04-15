import React from "react";

type Props = {
  error: Error;
};

const ErrorPage = ({ error }: Props) => {
  return (
    <>
      <h2>Whoops, something went wrong</h2>
      <p> Reason: {error.message} </p>
    </>
  );
};

export default ErrorPage;
