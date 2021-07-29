import {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import { IProducts } from "../../types/products";

type Props = {
  products: Array<IProducts>;
};

export const WishComponentComponent: FC<Props> = ({ products }) => {
  const [useFavorites, setFavorites] = useState<
    IProducts[] | null[] | undefined[]
  >([]);

  useEffect(() => {
    const wish: number[] | null = JSON.parse(
      localStorage?.getItem("favorites")
    );
    if (wish?.length > 0) {
      const favorites: IProducts[] = [];
      for (let product of products) {
        if (wish.indexOf(product.sku) !== -1) {
          favorites.push(product);
        }
      }
      setFavorites(favorites);
    }
  }, []);

  const handleClickProduct = (
    e: MouseEvent<HTMLElement>,
    index: number,
    sku: number
  ) => {
    e.preventDefault();
    const wish: number[] | null = JSON.parse(
      localStorage?.getItem("favorites")
    );
    wish.splice(wish.indexOf(sku), 1);
    localStorage.setItem("favorites", JSON.stringify(wish));
    const useFavoritesNew: IProducts[] = [...useFavorites];
    useFavoritesNew.splice(index, 1);
    setFavorites(useFavoritesNew);
  };

  return useFavorites.length > 0 ? (
    <main className="list">
      {useFavorites.map((product: IProducts, index: number) => {
        return (
          <div className="list__item" key={`product-${index}`}>
            <div
              onClick={(e) => handleClickProduct(e, index, product.sku)}
              className="list__item__remove"
            >
              X
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
    </main>
  ) : (
    <main>
      <p>Você não possui nenhum item na sua lista de desejos.</p>
    </main>
  );
};
