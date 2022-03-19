import styled from 'styled-components';

const Container = styled.header`
  padding-block: 2rem;
  background-color: var(--bg-accent);

  h1 {
    font-size: var(--fs-700);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    display: flex;
    align-items: center;
    & > :last-child {
      margin-inline-start: 1rem;
    }
  }
`;

export { Container };
