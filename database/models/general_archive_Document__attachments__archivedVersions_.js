/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Document__attachments__archivedVersions_ =  sequelize.define('general_archive_Document__attachments__archivedVersions_', {
    archivedVersions_: {
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
    attachments_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document__attachments_',
        key: 'attachments_'
      }
    },
    File_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Document__attachments__archivedVersions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "archivedVersions_" },
        ]
      },
      {
        name: "archivedVersions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "archivedVersions_" },
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
        name: "attachments_",
        using: "BTREE",
        fields: [
          { name: "attachments_" },
        ]
      },
      {
        name: "File_",
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
    ]
  });
	general_archive_Document__attachments__archivedVersions_.associate = models => {
		general_archive_Document__attachments__archivedVersions_.belongsTo(models.general_archive_Document__attachments_, { foreignKey: "attachments_"});
		general_archive_Document__attachments__archivedVersions_.belongsTo(models.general_archive_File_, { foreignKey: "File_"});
	};
return general_archive_Document__attachments__archivedVersions_


};
