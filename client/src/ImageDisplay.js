import React, { useEffect, useState } from "react";

function ImageDisplay(props) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/image/${props.imageName}`)
      .then((res) => res.blob())
      .then((data) => {
        setImageSrc(URL.createObjectURL(data));
      })
      .catch((err) => console.log(err));
  }, [props.imageName]);

  return <img src={imageSrc} alt="Uploaded image" />;
}

export default ImageDisplay;
