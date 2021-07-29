import { FC } from "react";

import Link from "next/link";

import {
  HomeOptionsComponent,
} from "../HomeOptionsComponent/HomeOptionsComponent";
import { SearchBarComponent } from "../SearchBarComponent/SearchBarComponent";

type Props = {
  title: string;
  localization: string | null | undefined;
};

export const HeaderComponent: FC<Props> = ({ title, localization }) => {
  return (
    <header className="header">
      <section className="header__firstColumn">
        <h1>
          <Link href="/">{title}</Link>
        </h1>
        <HomeOptionsComponent localization={localization} />
      </section>
      <section className="header__secondColumn">
        <SearchBarComponent />
      </section>
    </header>
  );
};
