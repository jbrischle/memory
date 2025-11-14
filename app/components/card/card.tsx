import React from 'react';
import Image from 'next/image';

function Card({
  id,
  showBack = true,
}: {
  id: string;
  showBack: boolean;
}) {
  const front = `/pokemon/${id}.png`;
  const back = `/pokemon/egg.png`;

  if (showBack) {
    return (
      <Image
        src={back}
        alt="pokemon-egg"
        width={100}
        height={100}
      />
    );
  } else {
    return (
      <Image
        src={front}
        alt="pokemon"
        width={100}
        height={100}
      />
    );
  }
}

export default Card;
