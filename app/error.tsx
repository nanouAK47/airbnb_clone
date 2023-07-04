"use client";

import { useEffect } from "react";

import EmptyState from "@/components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Il y a eu une erreur!" />;
};

export default ErrorState;
