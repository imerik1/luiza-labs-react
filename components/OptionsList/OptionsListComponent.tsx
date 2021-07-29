/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import Link from 'next/link';

type OptionPros = {
  link: string;
  src: string;
  alt: string;
  description: string;
};
export const OptionsListComponent: FC<OptionPros> = ({
  link,
  src,
  alt,
  description,
}) => {
  return (
    <div className="options__icon">
      <Link href={link}>
        <a>
          <img height="15px" src={src} alt={alt} />
          <span>{description}</span>
        </a>
      </Link>
    </div>
  );
};
