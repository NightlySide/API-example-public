/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Exchange_ =  sequelize.define('general_education_Exchange_', {
    Exchange_: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TS_modify_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    TS_create_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    name_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    erasmusCode_: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_education_Exchange_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Exchange_" },
        ]
      },
      {
        name: "Exchange_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Exchange_" },
        ]
      },
      {
        name: "university_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "university_" },
          { name: "name_" },
        ]
      },
      {
        name: "TS_modify_",
        using: "BTREE",
        fields: [
          { name: "TS_modify_" },
        ]
      },
      {
        name: "TS_create_",
        using: "BTREE",
        fields: [
          { name: "TS_create_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
    ]
  });
	general_education_Exchange_.associate = models => {
		general_education_Exchange_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_education_Exchange_.hasMany(models.general_education_Exchange__universities_, { foreignKey: "Exchange_"});
	};
return general_education_Exchange_


};
