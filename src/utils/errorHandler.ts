import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
  return error && typeof error === 'object' && 'status' in error;
};

export const isErrorWithMessage = (error: any): error is { message: string } => {
  return error && typeof error === 'object' && 'message' in error;
};
