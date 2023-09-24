import { Component, createSignal } from 'solid-js';
import { imageKitURI } from '../lib/constants';

type ImageSrcProps = { path: string };

const ImageSrc: Component<ImageSrcProps> = (props) => {
  const initialImageSrc = imageKitURI + props.path;
  const [imageSrc, setImageSrc] = createSignal(`${initialImageSrc}/tr:q-1`);

  const image = new Image();
  image.src = initialImageSrc;
  image.onload = () => {
    setImageSrc(initialImageSrc);
  };

  return <img src={imageSrc()} alt="" />;
};

export default ImageSrc;
