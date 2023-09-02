import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript';
import { ProductInterface } from '../types/Product';

@Table({
  tableName: 'products',
  modelName: 'Product',
  timestamps: false,
})
export class Product extends Model<ProductInterface> {
  @PrimaryKey
  @AllowNull(false)
  @Column
    id: number;

  @Column
    category: string;

  @Column({
    field: 'item_id',
    unique: true,
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
