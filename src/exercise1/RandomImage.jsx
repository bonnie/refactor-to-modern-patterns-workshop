import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

function RandomImage() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;
    const character = characters[Math.floor(Math.random() * characters.length)];
    setImageUrl(character.image);
  };

  return <Image src={imageUrl} />;
}

export default RandomImage;
