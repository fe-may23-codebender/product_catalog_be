import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { DetailInterface } from '../types/Detail';

@Table({
  tableName: 'details',
  modelName: 'Detail',
  timestamps: false,
})
export class Detail extends Model<DetailInterface> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
    id: number;

  @Column({
    type: DataType.STRING,
    field: 'item_id',
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
