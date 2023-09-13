import { useWindowSize } from "@uidotdev/usehooks";

function useImageSize(width, height, factor = 0.5) {
  const viewWidth = useWindowSize().width * factor;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  return { width: viewWidth, height: actualHeight };
}

export default useImageSize;
