import { FC } from "react";

import Link from "next/link";

type Page = {
  href: string;
  breadcrumb: string;
};

type Props = {
  pages: Array<Page>;
};

export const Breadcrumbs: FC<Props> = ({ ...pages }) => {
  return (
    <nav className="breadcrumbs" aria-label="breadcrumbs">
      <ol>
        {pages.pages.map((page: Page, i: number) => {
          return (
            <li key={i}>
              {i !== 0 ? <span>{">  "}</span> : <></>}
              <Link href={page.href}>
                <a>{page.breadcrumb}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
