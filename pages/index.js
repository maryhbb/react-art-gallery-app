import styled from "styled-components";
import SpotLight from "@/components/Spotlight";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export default function SpotlightPage({
  data,
  artPieceInfo,
  onToggleFavorite,
}) {
  const randomPiece = data[Math.trunc(Math.random() * data.length)];

  return (
    <Root>
      <SpotLight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
        artPieceInfo={artPieceInfo}
        onToggleFavorite={onToggleFavorite}
        slug={randomPiece.slug}
      />
    </Root>
  );
}
