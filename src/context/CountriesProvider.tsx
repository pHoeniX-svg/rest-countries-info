/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, Dispatch, useEffect, useState } from 'react';
import { CountriesAPi } from '~src/api';
import { API_ROUTES } from '~src/constants';
import { useAxios } from '~src/hooks';
import { ICountry } from '~src/types';

type CountriesState = ICountry[];
type CountriesDispatch = Dispatch<React.SetStateAction<CountriesState>>;

type CountriesContextProps = {
  error: string;
  loading: boolean;
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

  const [data, error, loading, axiosFetch] = useAxios<ICountry[]>();
  console.log('COUNTRIES', countries);

  useEffect(() => {
    const getData = () => {
      axiosFetch({
        axiosInstance: CountriesAPi,
        method: 'get',
        url: `${API_ROUTES.ALL}`,
      });
      setCountries(data);
    };
    getData();
  }, [axiosFetch, data]);

  return (
    <CountriesContext.Provider
      value={{ error, loading, countries, setCountries }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };
