import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonBack, Text } from '~src/components';
import { GlobalContainer } from '~src/globals';
import { format } from '~src/helpers';
import { useCountries } from '~src/hooks';
import { Container, CountryDetails, Detail, Image, Title } from './style';

const Country = () => {
  const { countryName } = useParams() as { countryName: string };
  const { countries } = useCountries();
  const navigate = useNavigate();

  const country = countries.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  return (
    country && (
      <Container>
        <GlobalContainer>
          <ButtonBack
            className="country__btn--back"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> <Text>Back</Text>
          </ButtonBack>

          <CountryDetails>
            <Image>
              <img src={country?.flags?.svg} alt={country?.name} />
            </Image>

            <div>
              <Title>{country?.name}</Title>
              <Detail>
                <Text>Native Name:</Text>
                <Text>{country?.nativeName}</Text>
              </Detail>
              <Detail>
                <Text>Population:</Text>
                <Text>{format(country?.population)}</Text>
              </Detail>
              <Detail>
                <Text>Region:</Text>
                <Text>{country?.region}</Text>
              </Detail>
              <Detail>
                <Text>Sub Region:</Text>
                <Text>{format(country?.population)}</Text>
              </Detail>
              <Detail>
                <Text>Capital:</Text>
                <Text>{format(country?.population)}</Text>
              </Detail>
              <Detail>
                <Text>Top Level Domain:</Text>
                <Text>{format(country?.population)}</Text>
              </Detail>
              <Detail>
                <Text>Currencies:</Text>
                <Text>
                  {country?.currencies?.map((currency) => currency.name)}
                </Text>
              </Detail>
              <Detail>
                <Text>Languages:</Text>
                <Text>{}</Text>
              </Detail>
            </div>
            {/* Section 2 */}
          </CountryDetails>
        </GlobalContainer>
      </Container>
    )
  );
};

export { Country };
