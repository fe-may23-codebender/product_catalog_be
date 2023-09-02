import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { TabletInterface } from '../types/Tablet';

@Table({
  tableName: 'tablets',
  modelName: 'Tablet',
  timestamps: false,
})
export class Tablet extends Model<TabletInterface> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
    id: number;

  @Column({
    type: DataType.STRING,
  })
    itemId: string;

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

  @Column(DataType.ARRAY(DataType.STRING))
    cell: string[];
}
