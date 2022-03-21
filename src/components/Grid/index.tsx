import { ReactNode } from 'react';
import { GlobalContainer } from '~src/globals';
import { Container, Content } from './style';

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <Container>
      <GlobalContainer>
        <Content>{children}</Content>
      </GlobalContainer>
    </Container>
  );
};

export { Grid };
