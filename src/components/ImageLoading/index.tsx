import { useState } from "react";

interface ImageLoadingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function ImageLoading({
  src,
  alt,
  className = "",
  containerClassName = "w-full h-full",
  ...props
}: ImageLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[rgba(20,20,30,0.8)] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
}
