import { Dispatch, SetStateAction } from 'react';

import { Data } from '../../../../../../dataProducts/types/dataProduct.types';
import { DataProducts } from '../../../../types/dataProducts.types';

export interface SortColumn {
  columnId: keyof Data;
  columnType: string;
  order: string;
  setDataProducts: Dispatch<SetStateAction<DataProducts>>;
}
