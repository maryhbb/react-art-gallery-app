import useImageSize from "@/utils/useImageSize";
import Image from "next/image";
import styled from "styled-components";
import FavoritButton from "../FavoriteButton";

const Root = styled.section`
  background-color: #999;
  padding: 1rem;
  display: inline-flex;
  gap: 1rem;
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Title = styled.strong`
  font-size: 1.5vw;
  margin: 1rem;
`;

const Details = styled.em`
  font-style: italic;
  font-size: 1vw;
  color: #555;
`;

const Artist = styled.div`
  width: 50px;
  padding: 1rem;
  color: #333;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5vw;
`;
const ColorPalette = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
`;

const Color = styled.li`
  border-radius: 50%;
  width: 3vw;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.value};
`;

function ArtPieceDetails(props) {
  const imageSize = useImageSize(
    props.dimensions.width,
    props.dimensions.height,
    0.3
  );

  return (
    <Root>
      <Piece>
        <FavoritButton
          slug={props.slug}
          artPieceInfo={props.artPieceInfo}
          onToggleFavorite={props.onToggleFavorite}
        />
        <Image
          src={props.imageSource}
          alt="art detail"
          width={imageSize.width}
          height={imageSize.height}
        />

        <ColorPalette>
          {props.colors.map((color) => (
            <Color key={color} value={color} title={color} />
          ))}
        </ColorPalette>

        <Title>{props.name}</Title>
        <Details>
          by {props.artist} | {props.genre} | {props.year}
        </Details>
      </Piece>
      <Artist>{props.artist}</Artist>
    </Root>
  );
}

export default ArtPieceDetails;
