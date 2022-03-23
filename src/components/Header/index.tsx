import { FaMoon } from 'react-icons/fa';
import { GlobalContainer } from '~src/globals';
import { Text } from '../Text';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
      <GlobalContainer>
        <Text element="h1">Where in the world?</Text>
        <Text element="p">
          {/* <FaRegMoon/> */}
          <FaMoon /> <Text>Dark Mode</Text>
        </Text>
      </GlobalContainer>
    </Container>
  );
};

export { Header };
