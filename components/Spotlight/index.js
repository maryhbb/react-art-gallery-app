import Image from "next/image";
import styled from "styled-components";

const Root = styled.section`
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Artist = styled.div`
  width: 50px;
  padding: 1rem;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.75rem;
`;

function SpotLight({ image, artist, width, height }) {
  return (
    <Root>
      <Piece>
        <Image
          src={image}
          alt="spotlight piece"
          width={width}
          height={height}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}

export default SpotLight;
