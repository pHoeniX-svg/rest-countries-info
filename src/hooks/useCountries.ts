import { AxiosError, AxiosResponse } from 'axios';
import { useContext, useDebugValue, useEffect, useState } from 'react';
import { CountriesApi } from '~src/api';
import { API_ROUTES } from '~src/constants';
import { CountriesContext } from '~src/context';

function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(`useCountries must be used within a CountriesProvider`);
  }
  const { countries, setCountries } = context;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState<AbortController | undefined>(
    undefined
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const ctrl = new AbortController();
        setController(ctrl);
        const result: AxiosResponse = await CountriesApi.get(
          `${API_ROUTES.ALL}`,
          {
            signal: ctrl.signal,
          }
        );
        setCountries(result?.data);
      } catch (error) {
        const e = error as AxiosError;
        console.error(e.response?.data);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getData();

    return () => {
      controller?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDebugValue(countries, (countries) =>
    countries?.length ? 'Countries Fetched' : 'No Countries To Show'
  );

  return { error, loading, countries };
}

export { useCountries };
