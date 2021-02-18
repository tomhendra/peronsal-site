export type WithChildren<T = { [key: string]: unknown }> = T & {
  children?: React.ReactNode;
};
