import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import useImageSize from "@/utils/useImageSize";
import FavoritButton from "../FavoriteButton";

const Root = styled.div`
  display: inline-block;
  border: 2px solid #ccc;
  padding: 2rem;
  overflow: hidden;
  position: relative;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  color: #ccc;
`;

function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
  slug,
  artPieceInfo,
  onToggleFavorite,
}) {
  const imageSize = useImageSize(width, height,0.4);

  return (
    <Root>
      <FavoritButton
        slug={slug}
        artPieceInfo={artPieceInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={imageSize.width}
          height={imageSize.height}
        />
      </Link>
      <Caption>
        <strong>{title}</strong>&nbsp;by&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}

export default ArtPiecesPreview;
