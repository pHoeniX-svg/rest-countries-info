import { FaMoon } from 'react-icons/fa';
import { GlobalContainer } from '~src/globals';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
      <GlobalContainer>
        <h1>Where in the world?</h1>
        <p>
          {/* <FaRegMoon/> */}
          <FaMoon /> <span>Dark Mode</span>
        </p>
      </GlobalContainer>
    </Container>
  );
};

export { Header };
