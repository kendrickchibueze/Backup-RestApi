'use strict';
import {
  Model, UUIDV4
}  from 'sequelize';

interface imagesAttributes{
  id: string,
  bucket: string,
  key: string

}

module.exports = (sequelize:any, DataTypes:any) => {
  class images extends Model<imagesAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  id!: string;
  bucket!: string;
  key!: string


    static associate(models) {
      // define association here
      images.belongsToMany(models.uploads,{
        through: 'uploadsAssignments'
      })

    }
  }
  images.init({
    id: {
     type:DataTypes.UUID,
     allowNull:false,
     primaryKey:true,
     autoIncrement:true
    },
    bucket:{
     type: DataTypes.STRING,
     allowNull:false
    },
    key:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'images',
  });
  return images;
};