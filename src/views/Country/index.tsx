import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonBack, Text } from '~src/components';
import { GlobalContainer } from '~src/globals';
import { useCountries } from '~src/hooks';
import { Container, CountryDetails, Image, Title } from './style';

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

              {/* Section 1 */}
            </div>
          </CountryDetails>

          {/* Section 2 */}
        </GlobalContainer>
      </Container>
    )
  );
};

export { Country };
