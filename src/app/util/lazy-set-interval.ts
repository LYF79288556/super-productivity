export const lazySetInterval = (func: () => void, intervalDuration: number): () => void => {
  let lastTimeoutId;

  const interval = () => {
    lastTimeoutId = setTimeout(interval, intervalDuration);
    func.call(null);
  };

  setTimeout(interval, intervalDuration);

  return () => {
    clearTimeout(lastTimeoutId);
  };
};