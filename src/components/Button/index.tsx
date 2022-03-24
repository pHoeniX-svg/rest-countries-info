import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: var(--b-radius, 0.5rem);
  outline: none;
  background: transparent;
  font: inherit;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus {
    outline: none;
  }
`;

const ButtonPrimary = styled(BaseButton)`
  background: var(--bg-accent);
  box-shadow: var(--shadow);
`;

const ButtonBorder = styled(ButtonPrimary)`
  padding: 0.6rem 2rem;
`;

const ButtonBack = styled(ButtonPrimary)`
  padding: 0.8rem 2.5rem;
`;

export { ButtonBorder, ButtonBack };
