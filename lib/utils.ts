/* eslint-disable @typescript-eslint/no-explicit-any */

/* 
  A utility is a generic function that accomplishes an abstract task, and is 
  not project-specific. 

  for project-specific utility functions, see /src/helpers/*
*/

export function callAll(...fns: any) {
  return function (...args: any) {
    return fns.forEach((fn: any) => fn?.(...args));
  };
}

export function sampleOne(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function capitalizedString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getCustomPropertyValue(property: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
}

export function setCustomPropertyValue(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

export function getPrefersReducedMotion() {
  const mediaQueryList = window.matchMedia(
    '(prefers-reduced-motion: no-preference)',
  );
  const prefersReducedMotion = !mediaQueryList.matches;

  return prefersReducedMotion;
}

// Error handling credit to Kent: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

export function urlEncoder(data: { [key: string]: any }) {
  const searchParams = new URLSearchParams(data);
  const keysForDel: string[] = [];

  searchParams.forEach((value, key) => {
    if (value === 'undefined' || value === '') {
      keysForDel.push(key);
    }
  });

  keysForDel.forEach((key) => {
    searchParams.delete(key);
  });

  return searchParams.toString();
}

export function getResponseData(response: Response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  } else {
    return response.text();
  }
}

export function formatIsoStringToDate(date: string) {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(Date.parse(date));
}

export const formatPriceToEuros = (price: number) =>
  price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
