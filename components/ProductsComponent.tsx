import {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import { IProducts } from "../types/products";

type Props = {
  products: Array<IProducts>;
};

export const ProductsComponent: FC<Props> = ({ products }) => {
  const [useFavorites, setFavorites] = useState<number[]>([]);
  // Carrega os itens favoritados ou retorna um array vazia
  useEffect(() => {
    if (localStorage?.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage?.getItem("favorites")));
    } else {
      setFavorites([]);
    }
  }, []);
  // Favorita um item
  const handleClickProduct = (e: MouseEvent<HTMLElement>, sku: number) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("enabled");
    if (e.currentTarget.classList[1]) {
      useFavorites.push(sku);
      localStorage.setItem("favorites", JSON.stringify(useFavorites));
    } else {
      useFavorites.splice(useFavorites.indexOf(sku), 1);
      localStorage.setItem("favorites", JSON.stringify(useFavorites));
    }
  };
  return (
    <main className="list">
      {useFavorites ? (
        <>
          {products.map((product, index) => {
            return (
              <div className="list__item" key={`product-${index}`}>
                <div
                  onClick={(e) => handleClickProduct(e, product.sku)}
                  className={`list__item__favorite ${
                    useFavorites?.indexOf(product.sku, 1) !== -1
                      ? "enabled"
                      : ""
                  }`}
                >
                  <Image
                    src="/assets/heart.png"
                    width="10px"
                    height="10px"
                    alt={`Coração de favorito do produto ${product.title}`}
                  />
                </div>
                <Image
                  src={product.image}
                  width="140px"
                  height="140px"
                  alt={`Foto do produto ${product.title}`}
                />
                <h3 className="list__item__title">{product.title}</h3>
                <p className="list__item__price">
                  {product.currencyFormat} {product.price.toFixed(2)}
                </p>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </main>
  );
};
