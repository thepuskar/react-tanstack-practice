import noImage from "assets/no-img.png";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";
import { cn } from "utils";

type Props = {
  imageUrl: string;
  className?: string;
};

export const ImageContainer = ({ imageUrl, className }: Props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsImgLoaded(true);
      setImgUrl(imageUrl);
    };
    img.onerror = () => {
      setHasError(true);
      setImgUrl(noImage);
      setIsImgLoaded(false);
    };
  }, [imageUrl]);

  return (
    <>
      {isImgLoaded ? (
        <img src={imgUrl} alt="" className={className} />
      ) : hasError ? (
        <img src={imgUrl} alt="" className={className} />
      ) : (
        <Skeleton className={cn("bg-gray-300 mb-2", className)} />
      )}
    </>
  );
};
ImageContainer.defaultProps = {
  className: "h-[320px] w-full object-cover sm:h-[240px] rounded",
};
