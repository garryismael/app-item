import { IItem } from './item.model';

export interface IItemList {
  id: number;
  name: string;
  user: number;
  items: IItem[];
  total: number;
}

export class ItemList {
  id: number;
  name: string;
  user: number;
  items: IItem[];
  total: number;
}
