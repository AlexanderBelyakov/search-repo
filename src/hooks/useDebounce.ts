export default function useDebounce(callback: Function, interval: number = 0) {
  let timeoutID: ReturnType<typeof setTimeout>;
  return function <T>(this: any, ...args: T[]) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback.apply(this, args), interval);
  };
}
