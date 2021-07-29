/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

export const SearchBarComponent: FC = () => {
  return (
    <div className="header__secondColumn__searchBar">
      <img height="15px" src="/assets/search.png" alt="Lupa de pesquisa" />
      <input type="text" placeholder="Buscar.." />
    </div>
  );
};
