import { SWRConfig } from "swr/_internal";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import styled from "styled-components";
import { useState } from "react";

const LoadingWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 48px;
  color: #888;
`;
const Title = styled.h1`
  text-align: center;
  color: #888;
`;

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPieceInfo, setArtPieceInfo] = useState([]);

  if (error) return <div>An Error occurred!</div>;
  if (isLoading) return <LoadingWrapper>Loading...</LoadingWrapper>;

  function handleToggleFavorite(slug) {
    setArtPieceInfo((artPieceInfo) => {
      const foundInfo = artPieceInfo.find((piece) => piece.slug === slug);

      if (foundInfo) {
        return artPieceInfo.map((foundInfo) =>
          foundInfo.slug === slug
            ? {
                ...foundInfo,
                isFavorite: !foundInfo.isFavorite,
              }
            : foundInfo
        );
      }
      return [...artPieceInfo, { slug, isFavorite: true }];
    });
  }
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Title>Art Gallery</Title>
          <Component
            {...pageProps}
            data={data}
            artPieceInfo={artPieceInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
