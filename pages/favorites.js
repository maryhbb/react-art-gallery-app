import ArtPieces from "@/components/ArtPieces";

function Favorites({ data, artPieceInfo, onToggleFavorite }) {
  const favorites = data.filter((piece) => {
    const { slug } = piece;
    const foundInfo = artPieceInfo.find((pieceInfo) => pieceInfo.slug === slug);
    return foundInfo?.isFavorite;
  });

  return (
    <ArtPieces
      artPieceInfo={artPieceInfo}
      onToggleFavorite={onToggleFavorite}
      pieces={favorites}
    />
  );
}

export default Favorites;
