import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { ProductInterface } from '../types/Product';
import { Phone } from './Phone';

@Table({
  tableName: 'products',
  modelName: 'Product',
  timestamps: false,
})
export class Product extends Model<ProductInterface> {
  @PrimaryKey
  @Column
    id: string;

  @Column
    category: string;

  @ForeignKey(() => Phone)
  @Column({
    field: 'phone_id',
  })
    phoneId: string;


  @Column({
    field: 'item_id',
  })
    itemId: string;

  @Column
    name: string;

  @Column({
    field: 'full_price',
  })
    fullPrice: number;

  @Column
    price: number;

  @Column
    screen: string;

  @Column
    capacity: string;

  @Column
    color: string;

  @Column
    ram: string;

  @Column
    year: number;

  @Column
    image: string;
}
