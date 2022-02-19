'use strict';
import {
  Model, UUIDV4
} from 'sequelize';


interface uploadsAttributes{
    id: string,
    file_name: string,
    image_id: string,
    thumbnail_id: string

}


module.exports = (sequelize:any, DataTypes:any) => {
  class uploads extends Model<uploadsAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: string;
     file_name!: string;
     image_id!: string;
     thumbnail_id!: string;



    static associate(models) {
      // define association here
      uploads.belongsToMany(models.User,{
        through: 'uploadsAssignments'
      })
    }
  }
  uploads.init({
    id:{
     type: DataTypes.BIGINT,
     allowNull:false,
     primaryKey:true,
     autoIncrement:true
    },
    file_name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image_id:{
      type:DataTypes.UUID,
      allowNull:false
    },
    thumbnail_id: {
      type:DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'uploads',
  });
  return uploads;
};