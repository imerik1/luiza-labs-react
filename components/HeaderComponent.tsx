import { FC } from 'react';

import { HomeOptionsComponent } from './HomeOptionsComponent';
import { SearchBarComponent } from './SearchBarComponent';

type Props = {
  title: string;
  localization: string | null | undefined;
};

export const HeaderComponent: FC<Props> = ({ title, localization }) => {
  return (
    <header className="header">
      <section className="header__firstColumn">
        <h1>{title}</h1>
        <HomeOptionsComponent localization={localization} />
      </section>
      <section className="header__secondColumn">
        <SearchBarComponent />
      </section>
    </header>
  );
};