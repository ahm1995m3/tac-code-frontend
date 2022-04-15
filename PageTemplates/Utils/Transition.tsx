import React from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

type Props = {
  status: "error" | "idle" | "loading" | "success";
  error: Error | null;
};

function Transition({ status, error }: Props) {
  return (
    <>
      {status === "loading" && <LoadingPage />}

      {error && <ErrorPage error={error} />}
    </>
  );
}

export default Transition;
