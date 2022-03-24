import { ReactNode } from 'react';
import {
  Body,
  Container,
  Image,
  StyledLink,
  Text,
  Title,
  Wrapper,
} from './style';

type Props = {
  children: ReactNode;
  restProps?: unknown[];
};
type CardProps = Props & { name: string };
type ImgProps = {
  src: string;
  alt: string;
  restProps?: unknown[];
};

const Card = ({ children, name, ...restProps }: CardProps) => {
  return (
    <StyledLink to={`/countries/${name}`}>
      <Container {...restProps}>{children}</Container>
    </StyledLink>
  );
};

Card.Body = function CardBody({ children, ...restProps }: Props) {
  return <Body {...restProps}>{children}</Body>;
};

Card.Title = function CardTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>;
};

Card.ImageContainer = function CardImage({ children, ...restProps }: Props) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Image = function CardImage({ src, alt, ...restProps }: ImgProps) {
  return <Image src={src} alt={alt} {...restProps} />;
};

export { Card };
