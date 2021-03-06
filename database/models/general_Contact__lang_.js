/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact__lang_ =  sequelize.define('general_Contact__lang_', {
    lang_: {
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
    Contact_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Contact_',
        key: 'Contact_'
      }
    },
    Language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Contact__lang_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_" },
        ]
      },
      {
        name: "lang_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_" },
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
        name: "Contact_",
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
      {
        name: "Language_",
        using: "BTREE",
        fields: [
          { name: "Language_" },
        ]
      },
    ]
  });
	general_Contact__lang_.associate = models => {
		general_Contact__lang_.belongsTo(models.general_Contact_, { foreignKey: "Contact_"});
		general_Contact__lang_.belongsTo(models.general_Language_, { foreignKey: "Language_"});
	};
return general_Contact__lang_


};
