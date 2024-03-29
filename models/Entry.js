const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const user = require('../models/User')

class Entry extends Model{

};

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    mood: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: { 
      type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id',
    },
  },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry',
  },


);

module.exports = Entry;
