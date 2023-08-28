import {
  Model,
  Table,
  Column,
  HasMany,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { Description } from './Description';
import { PhoneInterface } from '../types/Phone';

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false,
})
export class Phone extends Model<PhoneInterface> {
  @PrimaryKey
  @Column
    id: string;

  @Column({
    field: 'namespace_id',
  })
    namespaceId: string;

  @Column
    name: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    field: 'capacity_available',
  })
    capacityAvailable: string[];

  @Column
    capacity: string;

  @Column({
    field: 'price_regular',
  })
    priceRegular: number;

  @Column({
    field: 'price_discount',
  })
    priceDiscount: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    field: 'colors_available',
  })
    colorsAvailable: string[];

  @Column
    color: string;

  @Column(DataType.ARRAY(DataType.STRING))
    images: string[];

  @HasMany(() => Description)
    descriptions: Description[];

  @Column
    screen: string;

  @Column
    resolution: string;

  @Column
    processor: string;

  @Column
    ram: string;

  @Column
    camera: string;

  @Column
    zoom: string;

  @Column
    cell: string;
}
