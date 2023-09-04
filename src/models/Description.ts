import {
  Model,
  Table,
  Column,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Phone } from './Phone';
import { DescriptionInterface } from '../types/Description';

@Table({
  tableName: 'descriptions',
  modelName: 'Description',
  timestamps: false,
})
export class Description extends Model<DescriptionInterface> {
  @Column
    title: string;

  @Column(DataType.ARRAY(DataType.TEXT))
    text: string[];

  @ForeignKey(() => Phone)
  @Column({
    field: 'item_id',
  })
    itemId: string;
}
