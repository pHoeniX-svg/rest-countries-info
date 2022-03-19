import Select from 'react-select';
import styled from 'styled-components';

const Container = styled.section`
  padding-block: 4rem;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 4rem;

    @media (min-width: 35em) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const SearchContainer = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 2rem 4fr;
  width: 100%;
  padding-block: 1.2rem;
  padding-inline: 3rem 6rem;
  border-radius: 0.6rem;
  color: var(--clr-primary);
  background-color: var(--bg-accent);
  box-shadow: var(--shadow);
  overflow: hidden;

  @media (min-width: 35em) {
    width: 35rem;
  }

  .search__icon {
    font: inherit;
    grid-column: 1 / 2;
    z-index: 2;
  }

  input {
    grid-column: 2 / 5;
    margin-left: 1rem;
    padding: 0.5rem;
    border: 0;
    background-color: transparent;
    outline: none;
  }

  &:focus-within {
    .search__icon {
      display: none;
    }

    input {
      grid-column: 1 / -1;
    }

    ::placeholder {
      color: transparent;
    }
  }
`;

const FilterContainer = styled.form`
  color: var(--clr-primary);

  .Select__control {
    padding-block: 0.7rem;
    padding-inline: 1.5rem;
    border: 0;
    border-radius: 0.6rem;
    background-color: var(--bg-accent);
    box-shadow: var(--shadow);
  }

  .Select__indicator-separator {
    width: 0;
  }

  .Select__placeholder {
    color: var(--clr-primary);
  }
`;

const StyledSelect = styled(Select)``;

export { Container, SearchContainer, FilterContainer, StyledSelect };
