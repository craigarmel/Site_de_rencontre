import { DataTypes } from "sequelize";

export const MatchModel = (sequelize) => {

    const Match = sequelize.define('Match', {
        user1_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          user2_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
        date_match: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    })

    return Match
}