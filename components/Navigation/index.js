import NextLink from "next/link";
import styled from "styled-components";

const Root = styled.nav`
  height: 80px;
  display: flex;
  background: #ccc;
  align-items: center;
  text-align: center;

  /* > a  {
    font-weight: 2rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;

    &:hover {
      background-color: #333;
      color: white;
    }
  } */
`;

const Link = styled(NextLink)`
  font-weight: 2rem;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

export default function Navigation() {
  return (
    <Root>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="/favourites">Favourites</Link>
    </Root>
  );
}
