import {
  useEffect,
  useState,
} from "react";

import Head from "next/head";

import { Breadcrumbs } from "../components/Breadcrumbs/BreadcrumbsComponent";
import { HeaderComponent } from "../components/Header/HeaderComponent";

export default function WishList() {
  const [useLocalization, setLocalization] = useState<
    string | null | undefined
  >();
  useEffect(() => {
    if (localStorage?.getItem("localization")) {
      setLocalization(localStorage?.getItem("localization"));
    }
  }, []);
  return (
    <>
      <Head>
        <title>Lista de desejos</title>
      </Head>
      <HeaderComponent title="MegaNets" localization={useLocalization} />
      <Breadcrumbs
        pages={[
          { href: "/", breadcrumb: "Home" },
          { href: "/wishlist", breadcrumb: "Lista de Desejos" },
        ]}
      />
    </>
  );
}
