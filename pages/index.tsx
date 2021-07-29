import {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";

import { HeaderComponent } from "../components/HeaderComponent";
import { ProductsComponent } from "../components/ProductsComponent";
import { IProducts } from "../types/products";

type Props = {
  products: Array<IProducts>;
};

export default function Index({ products }: Props) {
  const [useLocalization, setLocalization] = useState<
    string | null | undefined
  >();
  const [useError, setError] = useState<string>();
  useEffect(() => {
    if (localStorage.getItem("localization")) {
      setLocalization(localStorage.getItem("localization"));
    }
  }, []);
  const handleInputCep = (e: ChangeEvent<HTMLInputElement>) => {
    // habilita apenas número
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    if (e.target.value.length === 8) {
      fetch(`https://viacep.com.br/ws/${e.target.value}/json`).then(
        (response) => {
          response.json().then((data) => {
            // se a API retornar um endereço
            if (data.logradouro) {
              setLocalization(`${data.localidade} - ${data.uf}`);
              localStorage.setItem(
                "localization",
                `${data.localidade} - ${data.uf}`
              );
            } else {
              setError("Digite um CEP válido");
            }
          });
        }
      );
    }
  };
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      {useLocalization ? (
        <></>
      ) : (
        <div className="choose">
          <label htmlFor="cep">Digite seu CEP</label>
          <input
            className="choose__locate"
            id="cep"
            type="text"
            placeholder="Digite seu CEP"
            maxLength={8}
            onInput={handleInputCep}
          />
          {useError ? <span>{useError}</span> : <></>}
        </div>
      )}
      {useMemo(
        () => (
          <HeaderComponent title="MegaNets" localization={useLocalization} />
        ),
        [useLocalization]
      )}
      <Breadcrumbs
        containerClassName="breadcrumbs"
        useDefaultStyle
        rootLabel="Home"
      />
      {useMemo(
        () => (
          <ProductsComponent products={products} />
        ),
        [products]
      )}
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
