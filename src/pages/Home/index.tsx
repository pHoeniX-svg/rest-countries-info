import { Card, Grid, SearchForm, Text } from '~src/components';
import { format } from '~src/helpers';
import { useCountries } from '~src/hooks';

const Home = () => {
  const { countries } = useCountries();
  console.log('COUNTRIES', countries);

  return (
    <>
      <SearchForm />
      <Grid>
        {countries?.map((country) => {
          return (
            <Card key={country?.numericCode}>
              <Card.ImageContainer>
                <Card.Image src={country?.flag} alt={country?.name} />
              </Card.ImageContainer>
              <Card.Body>
                <Card.Title>{country?.name}</Card.Title>

                <Card.Text>
                  <Text>Population:</Text>
                  <Text>{format(country?.population)}</Text>
                </Card.Text>

                <Card.Text>
                  <Text>Region:</Text>
                  <Text>{country?.region}</Text>
                </Card.Text>

                <Card.Text>
                  <Text>Capital:</Text>
                  <Text>{country?.capital}</Text>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export { Home };
