export interface IItem {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
}

export class Item {
  id: number;
  name: string;
  description: string;
  price: number;
}
