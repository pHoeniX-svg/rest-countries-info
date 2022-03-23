import styled from 'styled-components';

const Container = styled.section`
  margin-block: 3rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4em;
`;

export { Container, Content };
