import Image from "next/image";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";


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

  const viewWidth = useWindowSize().width * 0.8;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  return (
    <Root>
      <Image src={image} alt={title} width={viewWidth} height={actualHeight} />
      <Caption>
        <strong>{title}</strong>&nbsp;by&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}

export default ArtPiecesPreview;
