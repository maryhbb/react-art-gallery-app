import useImageSize from "@/utils/useImageSize";
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
  const imageSize = useImageSize(width, height, 0.3);
  return (
    <Root>
      <Piece>
        <Image
          src={image}
          alt="spotlight piece"
          width={imageSize.width}
          height={imageSize.height}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}

export default SpotLight;
