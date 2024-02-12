const {Model, DataTypes} = require ('sequelize');

class Habit extends Model {
}

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
            allowNull: false
        },
        updated_At: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }

        }


    }
)