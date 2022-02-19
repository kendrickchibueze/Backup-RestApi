
'use strict';
import {
  Model, UUIDV4
} from 'sequelize';



interface UserAttributes {
  id: string;
  fullName: string;
  email: string;
  password: string;
}




module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model<UserAttributes>
  implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!:string;
    fullName!:string;
    email!: string;
    password!:string;


    static associate(models:any) {
      // define association here
      User.belongsToMany(models.uploads, {
        through:'uploadsAssignments'
      })
    }
  };
  User.init({
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    fullName: {
     type:DataTypes.STRING ,
     allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    }

  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};