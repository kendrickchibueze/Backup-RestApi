import express from 'express';
const app = express();
const port  = process.env.PORT || 5001
import db from './models';


db.sequelize.sync().then(() => {
    app.listen(port, ()=>{
        console.log(`App listening on port ${port}`);
    });
})

