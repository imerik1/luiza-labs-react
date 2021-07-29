/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import { OptionsListComponent } from "./OptionsListComponent";

type Props = {
  localization: string | null | undefined;
};

export const HomeOptionsComponent: FC<Props> = ({ localization }) => {
  return (
    <div className="options">
      <OptionsListComponent
        link=""
        src="/assets/map-marker.png"
        alt="Icone de localização"
        description={`Cidade: ${localization ? localization : ""}`}
      />
      <OptionsListComponent
        link=""
        src="/assets/phone.png"
        alt="Icone de telefone"
        description="Central de atendimento"
      />
      <OptionsListComponent
        link=""
        src="/assets/heart.png"
        alt="Icone de coração"
        description="Lista de desejos"
      />
    </div>
  );
};
