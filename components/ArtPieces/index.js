import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecesPreview";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;

function ArtPieces({ pieces, artPieceInfo, onToggleFavorite }) {

  return (
    <Root>
      {pieces.map(({ slug, imageSource, name, artist, dimensions }) => {
        return (
          <ArtPiecesPreview
            key={slug}
            slug={slug}
            image={imageSource}
            title={name}
            artist={artist}
            width={dimensions.width}
            height={dimensions.height}
            artPieceInfo={artPieceInfo}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </Root>
  );
}

export default ArtPieces;
