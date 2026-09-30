export const noopSubscribe = (): (() => void) => {
  return () => {};
};
