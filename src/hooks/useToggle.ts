import { useLocalStorage } from './useLocalStorage';

type HookReturnType<T> = [boolean | T, (value?: boolean | T) => void];

const useToggle = <T>(key: string, initialValue: T): HookReturnType<T> => {
  const [state, setState] = useLocalStorage<boolean | T>(key, initialValue);

  const toggle = (value?: boolean | T) => {
    setState((prev) => {
      return typeof value === 'boolean' ? value : !prev;
    });
  };

  return [state, toggle];
};

export { useToggle };
