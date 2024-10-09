import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BackgroundImageWithSkeleton = ({ imageUrl, children }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full h-64">
      {loading && (
        <Skeleton
          height="100%"
          width="100%"
          className="rounded-lg absolute top-0 left-0"
        />
      )}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg ${
          loading ? "hidden" : "block"
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onLoad={handleLoad} // onLoad won't work on div, will use onLoad for img
      >
        {/* This dummy image helps to detect when the background loads */}
        <img
          src={imageUrl}
          alt=""
          style={{ display: "none" }}
          onLoad={handleLoad}
        />
      </div>
      {/* Render children if any */}
      {children}
    </div>
  );
};

export default BackgroundImageWithSkeleton;
