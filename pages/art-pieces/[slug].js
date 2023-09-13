import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import styled from "styled-components";

const Root = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

function ArtPieceDetailsPage({ data }) {
  const router = useRouter();

  console.log(router);
  const routerSlug = router.query.slug;

  const match = data.find((arrayItem) => {
    return arrayItem.slug === routerSlug;
  });

  return (
    <Root>
      <BackButton onClick={() => router.push("/art-pieces")}>Back</BackButton>

      <ArtPieceDetails {...match} />
    </Root>
  );
}

export default ArtPieceDetailsPage;
