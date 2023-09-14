import ArtPieces from "../../components/ArtPieces";

function ArtPiecesPage({ data, artPieceInfo, onToggleFavorite }) {
  return (
    <ArtPieces
      pieces={data}
      artPieceInfo={artPieceInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}

export default ArtPiecesPage;
