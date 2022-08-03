import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { NumberValue } from '@interfaces/number_values.interface';

export type NumberValueCreationAttributes = Optional<NumberValue, 'id' | 'value'>;

export class NumberValueModel extends Model<NumberValue, NumberValueCreationAttributes> implements NumberValue {
  public id: number;
  public value: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof NumberValueModel {
  NumberValueModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: 'number_values',
      sequelize,
    },
  );

  return NumberValueModel;
}
