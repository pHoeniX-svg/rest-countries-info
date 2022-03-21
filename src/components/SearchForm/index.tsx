import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GlobalContainer } from '~src/globals';
import { InputEventType } from '~src/types';
import { Container, FilterContainer, SearchContainer } from './style';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const SearchForm = () => {
  const [country, setCountry] = useState('');

  const handleChange = (e: InputEventType) => {
    const { value } = e.target;
    console.log(value);
    setCountry(value);
  };

  return (
    <Container>
      <GlobalContainer>
        <SearchContainer>
          <FaSearch className="search__icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country..."
            value={country}
            onChange={handleChange}
          />
        </SearchContainer>

        <FilterContainer>
          {/* <StyledSelect
            classNamePrefix={'Select'}
            options={options}
            placeholder="Filter by Region"
          /> */}
        </FilterContainer>
      </GlobalContainer>
    </Container>
  );
};

export { SearchForm };
