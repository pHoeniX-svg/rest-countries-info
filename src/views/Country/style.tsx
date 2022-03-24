import styled from 'styled-components';

const Container = styled.section`
  & > div {
    padding-block: 4rem;
  }

  .country__btn--back {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;

    & > span {
      margin-inline-start: 1rem;
    }
  }
`;

const Title = styled.h1`
  font-size: var(--fs-800);
`;

const CountryDetails = styled.div`
  display: grid;
  gap: var(--gap, 1rem);

  @media (min-width: 35em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;

const Detail = styled.p`
  & :first-child {
    font-weight: var(--fw-600);
    margin-right: 1rem;
  }
`;

const Image = styled.div`
  img {
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }
`;

export { Container, Title, Detail, Image, CountryDetails };
