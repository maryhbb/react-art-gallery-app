import useSWR from "swr";
import styled from "styled-components";
import ArtPieces from "@/components/ArtPieces";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #888;
`;

const LoadingWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 48px;
  color: #888;
`;

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error } = useSWR(URL);

  if (error) return <div>An Error occurred!</div>;

  return data ? (
    <Root>
      <Title>Art Gallery</Title>
      <ArtPieces pieces={data} />
    </Root>
  ) : (
    <LoadingWrapper>Loading...</LoadingWrapper>
  );
}
