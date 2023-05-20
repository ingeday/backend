// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

// id: { 
//     allowNull: false,
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: {
//     type: Sequelize.STRING
//   },
//   programId : {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'programs',
//       key: 'id'
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE'
//   },
//   courses_related: {
//     type: Sequelize.STRING
//   },
//   programs_related: {
//     type: Sequelize.STRING
//   },

export interface SubjectAttributes {
    id: number | undefined;
    name: string | undefined;
    programId: number | undefined;
    courses_related: string | undefined;
    programs_related: string | undefined;
}

class Subject extends Model<SubjectAttributes> implements SubjectAttributes {
    public id!: number | undefined;
    public name: string | undefined;
    public programId: number | undefined;
    public courses_related: string | undefined;
    public programs_related: string | undefined;
  // Otros atributos de la universidad
}

Subject.init(
  {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      programId: {
          type: DataTypes.NUMBER,
          allowNull: false,
      },
      courses_related: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      programs_related: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  },
  {
    sequelize,
    modelName: 'Subject',
    tableName: 'subjects',
    timestamps: false,
  }
);

export default Subject;