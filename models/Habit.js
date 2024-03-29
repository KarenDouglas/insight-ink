const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Habit extends Model {}

Habit.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        habit_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        streak: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        created_At: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_At: {
            type: DataTypes.DATE,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }

        }


    }, {
        sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,

    modelName: 'habit',
  }
);

module.exports = Habit;
