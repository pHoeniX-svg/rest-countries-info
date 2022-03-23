import { Card, Grid, SearchForm } from '~src/components';
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
            <Card key={country.name}>
              <Card.Image src={country.flag} alt={country.name} />
              <Card.Body>
                <Card.Title> {country.name}</Card.Title>
                <Card.Text> {country.population}</Card.Text>
                <Card.Text> {country.region}</Card.Text>
                <Card.Text> {country.capital}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export { Home };
