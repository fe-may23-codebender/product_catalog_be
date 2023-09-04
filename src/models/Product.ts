import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { ProductInterface } from '../types/Product';
import { Detail } from './Detail';

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

  @ForeignKey(() => Detail)
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
