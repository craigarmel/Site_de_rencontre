import { DataTypes } from "sequelize";

export const MessageModel = (sequelize) => {
    const Message = sequelize.define('Message', {
        expéditeur_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        destinataire_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        contenu: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      });
      
      module.exports = Message;
      
    }