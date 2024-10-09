import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSkeleton = ({ src, alt, imageClass }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full h-64">
      {loading && <Skeleton height={256} width={256} className="rounded-lg" />}
      <img
        src={src}
        alt={alt}
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg ${
          loading ? "hidden" : "block"
        } ${imageClass}`}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default ImageWithSkeleton;
