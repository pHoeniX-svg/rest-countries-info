/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, Dispatch, useState } from 'react';
import { Country } from '~src/types';

type CountriesState = Country[];
type CountriesDispatch = Dispatch<React.SetStateAction<CountriesState>>;

type CountriesContextProps = {
  countries: CountriesState;
  setCountries: CountriesDispatch;
};

type ProviderProps = { children: React.ReactNode };

const CountriesContext = createContext<CountriesContextProps | undefined>(
  undefined
);

const CountriesProvider = ({ children }: ProviderProps) => {
  const [countries, setCountries] = useState<CountriesState>(
    [] as CountriesState
  );

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };
