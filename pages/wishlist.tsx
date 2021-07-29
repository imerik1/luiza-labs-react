import {
  useEffect,
  useState,
} from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";

import { Breadcrumbs } from "../components/Breadcrumbs/BreadcrumbsComponent";
import { HeaderComponent } from "../components/Header/HeaderComponent";
import {
  WishComponentComponent,
} from "../components/WishList/WishListComponent";
import { IProducts } from "../types/products";

type Props = {
  products: Array<IProducts>;
};
export default function WishList({ products }: Props) {
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
      <WishComponentComponent products={products} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  const products: Props = await res.json();
  return { props: products };
};