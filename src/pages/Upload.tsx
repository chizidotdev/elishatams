/*
import ImageKit from 'imagekit-javascript';
import { imageKitURI } from '../lib/constants';

const API_URL = 'https://api.imagekit.io/v1';
const getImages = async () => {
  var imagekit = new ImageKit({
    urlEndpoint: imageKitURI,
  });

  const response = await fetch(API_URL + '/files', {
    headers: {
      Authorization: 'Basic ' + btoa('public_xsUdRDPnGCMTO+PdBSY+pOCrZ9k='),
    },
  });
  const data = await response.json();
  console.log(data);

  return imagekit.url({
    path: '/images/self-4.jpg',
  });
};
*/
