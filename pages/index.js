import styled from "styled-components";
import SpotLight from "@/components/Spotlight";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;



// const LoadingWrapper = styled.div`
//   height: 100vh;
//   display: grid;
//   place-items: center;
//   font-size: 48px;
//   color: #888;
// `;

// const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage( {data} ) {
  // const { data, error, isLoading } = useSWR(URL);

  // if (error) return <div>An Error occurred!</div>;
  // if (isLoading) return <LoadingWrapper>Loading...</LoadingWrapper>;

  const randomPiece = data[Math.trunc(Math.random() * data.length)];

  

  return (
    <Root>
      
      <SpotLight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width * 0.5}
        height={randomPiece.dimensions.height * 0.5}
      />
      {/* <ArtPieces pieces={data} /> */}
    </Root>
  );
}
