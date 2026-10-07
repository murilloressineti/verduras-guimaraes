import React from "react";

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ProductImage({
  src,
  alt,
  className,
  ...props
}: ProductImageProps) {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`
          size-full object-cover
          transition-transform duration-350 ease-out
          hover:scale-105
          ${className ?? ""}
        `}
        {...props}
      />
    </div>
  );
}
