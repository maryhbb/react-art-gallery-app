import Image from "next/image";
import styled from "styled-components";

const Root = styled.div`
  display: inline-block;
  border: 2px solid #ccc;
  padding: 2rem;
  overflow: hidden;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  font-size: 2rem;
`;

function ArtPiecesPreview({ image, title, artist, width, height }) {
  return (
    <Root>
      <Image src={image} alt={title} width={width} height={height} />
      <Caption>
        <strong>{title}</strong>&nbsp;by&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}

export default ArtPiecesPreview;
