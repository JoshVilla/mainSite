import React from "react";
import DefaultImage from "/assets/cordonLogo.png";
type Props = {
  imageSrc?: string;
  alt?: string;
  className?: string;
};

const CImage = ({
  imageSrc,
  alt = "",
  className = "",
  ...otherProps
}: Props) => {
  const newImage = imageSrc ? imageSrc : DefaultImage;
  const newClassname = imageSrc
    ? className
    : "w-80 h-40 rounded-lg object-contain";
  return (
    <img src={newImage} alt={alt} className={newClassname} {...otherProps} />
  );
};

export default CImage;
