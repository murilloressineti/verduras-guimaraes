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
    <div className="overflow-hidden rounded-2xl w-87.5 h-87.5 md:w-60.75 md:h-66.25">
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
