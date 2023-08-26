import { LoadingTile } from "./LoadingSnackstyle";
import { LoadingContainer } from "./LoadingSnackstyle";

export interface LoadingProps {
  type: "title" | "text" | "image" | "thumbnail";
}

function LoadingSnack() {
  return (
    <LoadingContainer>
      <LoadingTile className="realTitle" type="title" />
      <LoadingTile type="thumbnail" />
      <LoadingTile type="text" />
      <LoadingTile type="text" />
      <div>
        <LoadingTile type="title" />
        <LoadingTile type="image" />
      </div>
    </LoadingContainer>
  );
}

export default LoadingSnack;
