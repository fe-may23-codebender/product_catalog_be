import {
  Model,
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
} from 'sequelize-typescript';
import { UserInterface } from '../types/User';

@Table({
  tableName: 'users',
  modelName: 'User',
})
export class User extends Model<UserInterface> {
  @AllowNull(false)
  @Column
    name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
    email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    password: string;
}
