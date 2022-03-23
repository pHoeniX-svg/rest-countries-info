/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from 'react';
import { useLocalStorage } from '~src/hooks';
import { ICountry } from '~src/types';

type CountriesState = ICountry[];
type CountriesDispatch = React.Dispatch<
  React.SetStateAction<ICountry[] | undefined>
>;

type CountriesContextProps = {
  countries: CountriesState;
  setCountries: CountriesDispatch;
};

type ProviderProps = { children: React.ReactNode };

const CountriesContext = createContext<CountriesContextProps | undefined>(
  undefined
);

const CountriesProvider = ({ children }: ProviderProps) => {
  const [countries, setCountries] = useLocalStorage<ICountry[]>(
    'countries',
    []
  );

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };
