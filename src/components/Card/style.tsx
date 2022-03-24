import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const Container = styled.article`
  border-radius: 0.5rem;
  background: var(--bg-accent);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const Body = styled.div`
  padding: 2rem;
  padding-bottom: 4rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  & :first-child {
    font-weight: var(--fw-600);
    margin-right: 1rem;
  }
`;

const Wrapper = styled.div``;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export { StyledLink, Container, Body, Title, Text, Image, Wrapper };
