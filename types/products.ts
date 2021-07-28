import { ISizes } from './sizes';

export interface IProducts {
  id: number
  sku: number,
  title: string,
  description: string,
  availableSizes: ISizes,
  style: string,
  price: number,
  installments: number,
  currencyId: string,
  currencyFormat: string,
  isFreeShipping: boolean,
  image: string
}