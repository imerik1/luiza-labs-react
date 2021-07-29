/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import Link from 'next/link';

type OptionPros = {
  link: string;
  src: string;
  alt: string;
  description: string;
};

type Props = {
  localization: string | null | undefined;
};

export const HomeOptionsComponent: FC<Props> = ({ localization }) => {
  const OptionsList: FC<OptionPros> = ({ link, src, alt, description }) => {
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
  return (
    <div className="options">
      <OptionsList
        link="/somewhere"
        src="/assets/map-marker.png"
        alt="Icone de localização"
        description={`Cidade: ${localization}`}
      />
      <OptionsList
        link="/somewhere"
        src="/assets/phone.png"
        alt="Icone de telefone"
        description="Central de atendimento"
      />
      <OptionsList
        link="/some"
        src="/assets/heart.png"
        alt="Icone de coração"
        description="Lista de desejos"
      />
    </div>
  );
};
