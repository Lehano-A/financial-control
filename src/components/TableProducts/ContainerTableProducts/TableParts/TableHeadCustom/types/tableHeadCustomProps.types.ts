import { Dispatch, SetStateAction } from 'react';

import { DataProducts } from '../../../../types/dataProducts.types';

export type Order = 'asc' | 'desc';

export interface TableHeadCustomProps {
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
  setDataProducts: Dispatch<SetStateAction<DataProducts>>;
}
