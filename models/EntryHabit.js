const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EntryHabit extends Model {}

EntryHabit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        entry_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'entry',
                key: 'id'
            }
        },
        habit_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'habit',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'entry_habit',
    }
);

module.exports = EntryHabit;
