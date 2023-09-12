import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecesPreview";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;

function ArtPieces({ pieces }) {
  return (
    <Root>
      {pieces.map(({ slug, imageSource, name, artist, dimensions }) => {
        return (
          <ArtPiecesPreview
            key={slug}
            image={imageSource}
            title={name}
            artist={artist}
            width={dimensions.width * 0.75}
            height={dimensions.height * 0.75}
          />
        );
      })}
    </Root>
  );
}

export default ArtPieces;
