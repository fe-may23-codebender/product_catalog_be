import {
  Model,
  Table,
  Column,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Detail } from './Detail';
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

  @ForeignKey(() => Detail)
  @Column({
    field: 'item_id',
  })
    itemId: string;
}
